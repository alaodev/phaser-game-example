class Platforms {
  constructor(context) {
    this.context = context
    this.object = undefined

    this.initialize()
  }

  initialize() {
    this.object = this.context.physics.add.staticGroup()

    this.object.create(400, 568, 'ground').setScale(2).refreshBody()

    this.object.create(600, 400, 'ground')
    this.object.create(50, 250, 'ground')
    this.object.create(750, 220, 'ground')
  }
}

export default Platforms