import { GameScene } from "./game/Scene.js";

const host = document.querySelector("#app");
const game = new GameScene(host);
game.start();

