import Phaser from 'phaser';

import Platforms from '@/game/objects/platforms';
import Player from '@/game/objects/player';
import Cursors from '@/game/controllers/cursors';
import Stars from '@/game/objects/stars'
import Bombs from '@/game/objects/bombs';
import Anims from '@/game/controllers/anims';

class MainScene extends Phaser.Scene {
  constructor() {
    super()

    this.platforms = undefined
    this.player = undefined
    this.cursors = undefined
    this.stars = undefined
    this.bombs = undefined

    this.score = 0
    this.scoreText = ''
  }

  init() {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload() {
    this.load.image('background', 'assets/images/background.png')
    this.load.image('bomb', 'assets/images/bomb.png')
    this.load.image('ground', 'assets/images/platform.png')
    this.load.image('star', 'assets/images/star.png')
    this.load.image('platform-l', 'assets/images/platform-left.png')
    this.load.image('platform-c', 'assets/images/platform-center.png')
    this.load.image('platform-r', 'assets/images/platform-right.png')

    this.load.spritesheet('dude',
      'assets/sprites/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    )
  }

  create() {
    this.add.image(500, 375, 'background')
    this.scoreText = this.add.text(16, 16, `Score: ${this.score}`, { fontSize: '32px', fill: '#000' })

    this.platforms = new Platforms(this)
    this.player = new Player(this)
    this.cursors = new Cursors(this)
    this.stars = new Stars(this)
    this.bombs = new Bombs(this)

    new Anims(this)

    this.physics.add.collider(this.player.object, this.platforms.object)
    this.physics.add.collider(this.stars.object, this.platforms.object);
    this.physics.add.collider(this.bombs.object, this.platforms.object);
    this.physics.add.collider(this.bombs.object, this.bombs.object);
    this.physics.add.overlap(this.player.object, this.stars.object, this.stars.collectStar, null, this);
    this.physics.add.collider(this.player.object, this.bombs.object, this.bombs.hitBomb, null, this);
  }

  update() {
    if (this.cursors.controller.left.isDown) {
      this.player.object.setVelocityX(-300);

      this.player.object.anims.play('left', true);
    }
    else if (this.cursors.controller.right.isDown) {
      this.player.object.setVelocityX(300);

      this.player.object.anims.play('right', true);
    }
    else {
      this.player.object.setVelocityX(0);

      this.player.object.anims.play('turn');
    }

    if (this.cursors.controller.up.isDown && this.player.object.body.touching.down) {
      this.player.object.setVelocityY(-750);
    }
  }

}

export default MainScene