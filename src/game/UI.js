export class UI {
  constructor() {
    this.healthBar = document.querySelector("#healthBar");
    this.inflammationBar = document.querySelector("#inflammationBar");
    this.netBar = document.querySelector("#netBar");
    this.healthValue = document.querySelector("#healthValue");
    this.inflammationValue = document.querySelector("#inflammationValue");
    this.netValue = document.querySelector("#netValue");
    this.waveLabel = document.querySelector("#waveLabel");
    this.clearedValue = document.querySelector("#clearedValue");
    this.timeValue = document.querySelector("#timeValue");
    this.message = document.querySelector("#message");
  }

  update(state) {
    this.setMeter(this.healthBar, this.healthValue, state.health);
    this.setMeter(this.inflammationBar, this.inflammationValue, state.inflammation);
    this.setMeter(this.netBar, this.netValue, state.netBurden);
    this.waveLabel.textContent = `Wave ${state.wave}`;
    this.clearedValue.textContent = `Cleared: ${state.cleared}`;
    this.timeValue.textContent = `Stabilise: ${this.formatTime(state.remainingSeconds)}`;
  }

  setMeter(bar, label, value) {
    const rounded = Math.round(value);
    bar.style.width = `${Math.max(0, Math.min(100, rounded))}%`;
    label.textContent = String(rounded);
  }

  formatTime(seconds) {
    const total = Math.ceil(seconds);
    const minutes = Math.floor(total / 60);
    const remainder = total % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
  }

  showIntro(onRestart) {
    this.message.classList.remove("hidden");
    this.message.innerHTML = `
      <h1>RA Synovium NET Shooter</h1>
      <p>Guide an activated neutrophil through inflamed synovial tissue. Trap cytokines, immune complexes, complement bursts, debris, platelets, and invasive synoviocytes with NET-like chromatin webs.</p>
      <p>Balance suppression of inflammation against NET-mediated tissue damage. Tap or click once to begin.</p>
    `;
    const start = () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", keyStart);
      onRestart();
    };
    const keyStart = (event) => {
      if (event.key.toLowerCase() === "r" || event.code === "Space") start();
    };
    window.addEventListener("pointerdown", start);
    window.addEventListener("keydown", keyStart);
  }

  showEnd(title, text, cleared) {
    this.message.classList.remove("hidden");
    this.message.innerHTML = `
      <h1>${title}</h1>
      <p>${text}</p>
      <p>Inflammatory targets cleared: ${cleared}</p>
      <p>Press R or tap to restart.</p>
    `;
  }

  hideMessage() {
    this.message.classList.add("hidden");
  }
}
