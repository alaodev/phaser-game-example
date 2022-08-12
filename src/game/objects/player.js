class Player {
  constructor(context) {
    this.context = context
    this.object = undefined

    this.initialize()
  }

  initialize() {
    this.object = this.context.physics.add.sprite(100, 400, 'dude')

    this.object.setBounce(0.2)
    this.object.setCollideWorldBounds(true)
    this.object.body.setGravityY(300)
  }
}

export default Player