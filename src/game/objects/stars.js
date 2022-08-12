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
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.object.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
  }

  collectStar(player, star) {
    star.disableBody(true, true);

    this.score += 10
    this.scoreText.setText(`Score: ${this.score}`)

    if (this.stars.object.countActive(true) === 0) {
      this.stars.object.children.iterate(function (child) {
        child.enableBody(true, child.x, 0, true, true)
      })
    }
  }
}

export default Stars