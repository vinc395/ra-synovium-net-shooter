// Headless smoke test: plays the game on a desktop viewport and an emulated
// phone (real multi-touch), checks the main flows and fails on any console
// error. Screenshots are written to ./smoke/ (git-ignored).
//
//   npm run build && npm run preview      # in one terminal
//   npm run smoke                         # in another (default URL below)
//   npm run smoke -- http://127.0.0.1:5173/   # or point at the dev server
import { mkdirSync } from "node:fs";
import { chromium, devices } from "playwright";

const baseUrl = process.argv[2] || "http://127.0.0.1:4173/";
const outDir = "smoke";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ args: ["--ignore-gpu-blocklist", "--enable-gpu"] });
const failures = [];
const errors = [];

function check(condition, message) {
  console.log(`${condition ? "PASS" : "FAIL"}  ${message}`);
  if (!condition) failures.push(message);
}

function watch(page, label) {
  page.on("pageerror", (error) => errors.push(`[${label}] ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`[${label}] ${message.text()}`);
  });
}

const snapshot = (page) =>
  page.evaluate(() => {
    const g = window.__game;
    return {
      state: g.state,
      screen: g.ui.screen,
      shots: g.shots,
      targets: g.targets.length,
      z: g.player.position.z,
      device: g.input.device,
    };
  });

async function open(context, label) {
  const page = await context.newPage();
  watch(page, label);
  page.setDefaultTimeout(60000);
  await page.goto(`${baseUrl}?debug&quality=low`, { waitUntil: "load" });
  await page.waitForSelector('[data-action="start"]');
  return page;
}

// ---- Desktop ---------------------------------------------------------------
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await open(context, "desktop");
  let s = await snapshot(page);
  check(s.state === "menu" && s.targets === 0, "desktop: intro menu, nothing spawns behind it");
  await page.click('[data-action="start"]');
  await page.mouse.move(640, 200);
  await page.keyboard.down("KeyW");
  await page.mouse.down();
  await page.waitForTimeout(2500);
  await page.mouse.up();
  await page.keyboard.up("KeyW");
  s = await snapshot(page);
  check(s.state === "playing", "desktop: playing after Start");
  check(s.z < 8.5, "desktop: WASD moves the neutrophil");
  check(s.shots > 0, "desktop: holding the mouse fires NETs");
  await page.screenshot({ path: `${outDir}/smoke-desktop.png` });
  await page.keyboard.press("Escape");
  s = await snapshot(page);
  check(s.state === "paused" && s.screen === "pause", "desktop: Esc pauses");
  await page.click('[data-action="resume"]');
  await page.evaluate(() => {
    window.__game.health = 0;
  });
  await page.waitForFunction(() => window.__game.state === "over");
  check(true, "desktop: death leads to the game-over screen");
  await context.close();
}

// ---- Phone -----------------------------------------------------------------
{
  const context = await browser.newContext({ ...devices["iPhone 13"] });
  const page = await open(context, "phone");
  let s = await snapshot(page);
  check(s.device === "touch", "phone: touch controls selected");
  await page.tap('[data-action="start"]');
  check(await page.isVisible("#fireButton"), "phone: on-screen buttons visible");
  const cdp = await context.newCDPSession(page);
  const fire = await page.locator("#fireButton").boundingBox();
  const viewport = page.viewportSize();
  const joystick = { x: 90, y: viewport.height - 150, id: 1 };
  const finger = { x: fire.x + fire.width / 2, y: fire.y + fire.height / 2, id: 2 };
  await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [joystick] });
  for (let i = 1; i <= 6; i += 1) {
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ ...joystick, y: joystick.y - i * 10 }],
    });
  }
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [{ ...joystick, y: joystick.y - 60 }, finger],
  });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${outDir}/smoke-phone.png` });
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  s = await snapshot(page);
  check(s.z < 8, "phone: joystick moves the neutrophil");
  check(s.shots > 0, "phone: holding NET fires");
  await page.setViewportSize({ width: viewport.height, height: viewport.width });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/smoke-phone-landscape.png` });
  await context.close();
}

await browser.close();
if (errors.length) console.log(`\nConsole errors:\n${errors.join("\n")}`);
const ok = failures.length === 0 && errors.length === 0;
console.log(ok ? "\nSmoke test passed." : `\nSmoke test failed (${failures.length} checks, ${errors.length} errors).`);
process.exit(ok ? 0 : 1);
