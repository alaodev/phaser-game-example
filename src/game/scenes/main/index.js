import Phaser from "phaser";

import Platforms from "@/game/objects/platforms";
import Player from "@/game/objects/player";
import Cursors from "@/game/controllers/cursors";

class MainScene extends Phaser.Scene {
  constructor() {
    super()

    this.plataforms = undefined
    this.player = undefined
    this.cursors = undefined
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
    this.player = new Player(this)
    this.cursors = new Cursors(this)

    this.physics.add.collider(this.player.object, this.plataforms.object)
  }

  update() {
    if (this.cursors.controller.left.isDown) {
      this.player.object.setVelocityX(-160);

      this.player.object.anims.play('left', true);
    }
    else if (this.cursors.controller.right.isDown) {
      this.player.object.setVelocityX(160);

      this.player.object.anims.play('right', true);
    }
    else {
      this.player.object.setVelocityX(0);

      this.player.object.anims.play('turn');
    }

    if (this.cursors.controller.up.isDown && this.player.object.body.touching.down) {
      this.player.object.setVelocityY(-500);
    }
  }

}

export default MainScene