import Phaser from 'phaser';

class Stars {
  constructor(context) {
    this.context = context
    this.object = undefined

    this.initialize()
  }

  initialize() {
    this.object = this.context.physics.add.group({
      key: 'star',
      repeat: 10,
      setXY: { x: 50, y: -10, stepX: 90 }
    })

    this.object.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    })
  }

  collectStar(player, star) {
    star.disableBody(true, true);

    this.score += 10
    this.scoreText.setText(`Score: ${this.score}`)

    if (this.stars.object.countActive(true) === 0) {
      this.stars.object.children.iterate(function (child) {
        child.enableBody(true, child.x, 0, true, true)
      })

      let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)

      let bomb = this.bombs.object.create(x, 16, 'bomb')
      bomb.setBounce(1)
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(100, 200), 20);
    }
  }
}

export default Stars