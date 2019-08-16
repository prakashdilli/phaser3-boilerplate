import "phaser";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    key: 'MainMenu',
  };

export class WelcomeScene extends Phaser.Scene {
   
    title:string;
  
    constructor() {
      super(sceneConfig);
    }
  
    init(/*params: any*/): void {
      this.title = 'Phaser3 Typescript BoilerPlate'
    }
  
    preload(): void {
      
    }
  
    create(): void {
     
    }
  
    update(): void {
    
    }
  
  };
  