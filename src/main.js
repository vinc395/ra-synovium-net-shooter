import "./style.css";
import { GameScene } from "./game/Scene.js";

const host = document.querySelector("#app");

function showFatal(message) {
  const card = document.getElementById("card");
  const overlay = document.getElementById("overlay");
  overlay.classList.add("show");
  card.innerHTML = `
    <h1>RA Synovium <span>NET Shooter</span></h1>
    <p class="lead">${message}</p>
    <p>Try an up-to-date version of Chrome, Edge, Firefox or Safari with hardware acceleration enabled.</p>`;
}

function supportsWebGL2() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

if (!supportsWebGL2()) {
  showFatal("This game needs WebGL 2, which isn't available in this browser or device.");
} else {
  // Let the loading message paint before the (synchronous) texture generation.
  requestAnimationFrame(() =>
    setTimeout(() => {
      try {
        const game = new GameScene(host);
        game.start();
      } catch (error) {
        console.error(error);
        showFatal("Something went wrong while starting the game.");
      }
    }, 0),
  );
}
