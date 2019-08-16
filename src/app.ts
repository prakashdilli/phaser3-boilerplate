import "phaser";
import scenes from './scenes';

const config: Phaser.Types.Core.GameConfig = {
  title: "Phaser3 Typescript BoilerPlate",
  width: window.innerWidth,
  height: window.innerHeight,
  parent: "game",
  scene:scenes,
  backgroundColor: "#18216D"
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
};

export const game = new Game(config);

game.events.addListener('resize',() =>{
    this.resizeTo(window.innerWidth,window.innerHeight);
})

/* window.onload = () => {
  
};
window.addEventListener('resize', () => {
    game.resize(window.innerWidth, window.innerHeight);
  }); */
