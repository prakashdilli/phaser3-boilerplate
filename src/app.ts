import "phaser";
import scenes from './scenes';

const config: Phaser.Types.Core.GameConfig = {
  title: "Phaser3 Typescript BoilerPlate",
  width: 800,
  height: 600,
  parent: "game",
  scene: scenes,
  backgroundColor: "#333"
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }

};

export const game = new Game(config);


