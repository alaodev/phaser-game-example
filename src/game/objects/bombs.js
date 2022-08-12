class Bombs {
  constructor(context) {
    this.context = context
    this.object = undefined

    this.initialize()
  }

  initialize() {
    this.object = this.context.physics.add.group()
  }

  hitBomb(player, bomb) {
    this.physics.pause()

    player.setTint(0xff0000)
    bomb.setTint(0xff0000)

    player.anims.play('turn')
  }
}

export default Bombs