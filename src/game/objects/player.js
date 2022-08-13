class Player {
  constructor(context) {
    this.context = context
    this.object = undefined

    this.initialize()
  }

  initialize() {
    this.object = this.context.physics.add.sprite(100, 600, 'dude')

    this.object.setBounce(0.1)
    this.object.setCollideWorldBounds(true)
    this.object.body.setGravityY(1000)
  }
}

export default Player