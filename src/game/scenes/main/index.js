import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  constructor() {
    super()
  }

  init() {
    this.cameras.main.setBackgroundColor('#000000')
  }
}

export default MainScene