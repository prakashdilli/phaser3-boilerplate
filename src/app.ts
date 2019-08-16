import "phaser";
import scenes from './scenes';

const config: Phaser.Types.Core.GameConfig = {
  title: "Phaser3 Typescript BoilerPlate",
  width: window.innerWidth,
  height: window.innerHeight,
  parent: "game",
  scene: scenes,
  backgroundColor: "#f2f2f2"
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
};

export const game = new Game(config);

