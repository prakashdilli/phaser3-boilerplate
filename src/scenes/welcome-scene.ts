import "phaser";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    key: 'WelcomeScreen',
  };

export class WelcomeScene extends Phaser.Scene {
   
    title:string;
  
    constructor() {
      super(sceneConfig);
    }
  
    init(/*params: any*/): void {
      this.title = 'Phaser3 Typescript BoilerPlate';
      
    }
  
    preload(): void {
      this.load.image('logo','assets/logo.png')
    }
  
    create(): void {
     this.add.image(400,300,'logo');
    }
  
    update(): void {
    
    }
  
  };
  