import Phaser from "phaser";

import Platforms from "@/game/objects/platforms";

class MainScene extends Phaser.Scene {
  constructor() {
    super()

    this.plataforms = undefined
  }

  init() {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload() {
    this.load.image('sky', 'assets/images/sky.png')
    this.load.image('bomb', 'assets/images/bomb.png')
    this.load.image('ground', 'assets/images/platform.png')
    this.load.image('star', 'assets/images/star.png')

    this.load.spritesheet('dude',
      'assets/sprites/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    )
  }

  create() {
    this.add.image(400, 300, 'sky')

    this.plataforms = new Platforms(this)
  }

}

export default MainScene