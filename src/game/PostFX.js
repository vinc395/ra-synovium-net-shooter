import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

/**
 * Optional bloom pipeline. When bloom is off we render straight to the canvas
 * (cheapest path for low-end phones); tone mapping is identical either way.
 */
export class PostFX {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.enabled = false;
    this.composer = null;
    this.samples = 0;
  }

  configure({ bloom, msaa }) {
    const wantsComposer = Boolean(bloom);
    if (!wantsComposer) {
      this.enabled = false;
      return;
    }
    if (this.composer && this.samples === msaa) {
      this.enabled = true;
      this.syncSize();
      return;
    }
    this.disposeComposer();

    const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    const target = new THREE.WebGLRenderTarget(size.x, size.y, {
      type: THREE.HalfFloatType,
      samples: msaa,
    });
    this.composer = new EffectComposer(this.renderer, target);
    this.samples = msaa;
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.62, 0.55, 0.82);
    this.outputPass = new OutputPass();
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.outputPass);
    this.enabled = true;
    this.syncSize();
  }

  setBloomStrength(strength) {
    if (this.bloomPass) this.bloomPass.strength = strength;
  }

  syncSize() {
    if (!this.composer) return;
    // setSize first: EffectComposer.setPixelRatio() re-applies its stored
    // width, which right after construction is the drawing-buffer size.
    const size = this.renderer.getSize(new THREE.Vector2());
    this.composer.setSize(size.x, size.y);
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
  }

  render(dt) {
    if (this.enabled && this.composer) {
      this.composer.render(dt);
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  disposeComposer() {
    if (!this.composer) return;
    this.bloomPass.dispose();
    this.outputPass.dispose?.();
    this.composer.renderTarget1.dispose();
    this.composer.renderTarget2.dispose();
    this.composer = null;
    this.bloomPass = null;
    this.outputPass = null;
    this.renderPass = null;
  }
}
