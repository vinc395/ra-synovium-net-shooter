// Tiny Web Audio synthesiser: every sound is generated, so there are no
// audio files to download. All calls are no-ops until unlock() runs inside a
// user gesture (required by mobile browsers).

export class AudioFX {
  constructor(enabled = true) {
    this.enabled = enabled;
    this.ctx = null;
    this.master = null;
    this.noiseBuffer = null;
  }

  unlock() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    try {
      if (!this.ctx) {
        this.ctx = new AudioContextClass();
        const compressor = this.ctx.createDynamicsCompressor();
        compressor.threshold.value = -18;
        compressor.ratio.value = 6;
        this.master = this.ctx.createGain();
        this.master.gain.value = this.enabled ? 0.55 : 0;
        this.master.connect(compressor);
        compressor.connect(this.ctx.destination);
        const length = Math.floor(this.ctx.sampleRate * 0.6);
        this.noiseBuffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
        const data = this.noiseBuffer.getChannelData(0);
        for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
      }
      if (this.ctx.state === "suspended") this.ctx.resume();
    } catch {
      this.ctx = null;
    }
  }

  suspend() {
    if (this.ctx && this.ctx.state === "running") this.ctx.suspend();
  }

  resume() {
    if (this.ctx && this.ctx.state === "suspended") this.ctx.resume();
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(enabled ? 0.55 : 0, this.ctx.currentTime, 0.03);
    }
  }

  get ready() {
    return Boolean(this.ctx && this.enabled && this.ctx.state === "running");
  }

  tone({ type = "sine", freq = 440, to = null, duration = 0.2, gain = 0.2, attack = 0.005, delay = 0 }) {
    if (!this.ready) return;
    const t0 = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const amp = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (to) osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), t0 + duration);
    amp.gain.setValueAtTime(0.0001, t0);
    amp.gain.exponentialRampToValueAtTime(gain, t0 + attack);
    amp.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(amp);
    amp.connect(this.master);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  noise({ duration = 0.2, gain = 0.15, filter = "bandpass", freq = 1200, to = null, q = 1, delay = 0 }) {
    if (!this.ready) return;
    const t0 = this.ctx.currentTime + delay;
    const source = this.ctx.createBufferSource();
    source.buffer = this.noiseBuffer;
    const biquad = this.ctx.createBiquadFilter();
    biquad.type = filter;
    biquad.Q.value = q;
    biquad.frequency.setValueAtTime(freq, t0);
    if (to) biquad.frequency.exponentialRampToValueAtTime(Math.max(20, to), t0 + duration);
    const amp = this.ctx.createGain();
    amp.gain.setValueAtTime(0.0001, t0);
    amp.gain.exponentialRampToValueAtTime(gain, t0 + 0.01);
    amp.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    source.connect(biquad);
    biquad.connect(amp);
    amp.connect(this.master);
    source.start(t0);
    source.stop(t0 + duration + 0.02);
  }

  fire() {
    this.noise({ duration: 0.16, gain: 0.12, freq: 2600, to: 700, q: 1.4 });
    this.tone({ type: "triangle", freq: 620, to: 1180, duration: 0.1, gain: 0.06 });
  }

  capture(combo = 0) {
    const base = 520 * Math.pow(2, Math.min(combo, 12) / 12);
    this.tone({ type: "sine", freq: base, duration: 0.18, gain: 0.14 });
    this.tone({ type: "sine", freq: base * 1.5, duration: 0.22, gain: 0.08, delay: 0.05 });
  }

  engulf() {
    this.tone({ type: "sine", freq: 300, to: 110, duration: 0.24, gain: 0.2 });
    this.noise({ duration: 0.18, gain: 0.05, filter: "lowpass", freq: 900, to: 200 });
  }

  hitTough() {
    this.tone({ type: "square", freq: 220, to: 160, duration: 0.09, gain: 0.05 });
  }

  hurt() {
    this.tone({ type: "sawtooth", freq: 140, to: 60, duration: 0.3, gain: 0.16 });
    this.noise({ duration: 0.22, gain: 0.12, filter: "lowpass", freq: 1400, to: 200 });
  }

  escape() {
    this.tone({ type: "sawtooth", freq: 180, to: 120, duration: 0.35, gain: 0.08 });
    this.tone({ type: "sawtooth", freq: 190, to: 127, duration: 0.35, gain: 0.08 });
  }

  dash() {
    this.noise({ duration: 0.22, gain: 0.1, freq: 600, to: 2400, q: 0.8 });
  }

  burst() {
    this.tone({ type: "sine", freq: 90, to: 40, duration: 0.6, gain: 0.32 });
    this.noise({ duration: 0.55, gain: 0.18, freq: 3000, to: 300, q: 0.7 });
    this.tone({ type: "triangle", freq: 440, to: 1760, duration: 0.4, gain: 0.06 });
  }

  wave() {
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, index) =>
      this.tone({ type: "triangle", freq, duration: 0.32, gain: 0.08, delay: index * 0.09 }),
    );
  }

  win() {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, index) =>
      this.tone({ type: "triangle", freq, duration: 0.6, gain: 0.09, delay: index * 0.12 }),
    );
  }

  lose() {
    [392, 311.13, 261.63, 196].forEach((freq, index) =>
      this.tone({ type: "sawtooth", freq, duration: 0.5, gain: 0.06, delay: index * 0.16 }),
    );
  }

  click() {
    this.tone({ type: "triangle", freq: 880, duration: 0.05, gain: 0.05 });
  }

  /** Low "lub-dub" heartbeat; louder as inflammation rises. */
  heartbeat(inflammation) {
    const gain = 0.05 + (inflammation / 100) * 0.09;
    this.tone({ type: "sine", freq: 62, to: 40, duration: 0.18, gain });
    this.tone({ type: "sine", freq: 55, to: 38, duration: 0.16, gain: gain * 0.7, delay: 0.17 });
  }
}
