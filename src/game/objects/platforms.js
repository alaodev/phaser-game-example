import Platform from "./platform"

class Platforms {
  constructor(context) {
    this.context = context
    this.object = undefined

    this.initialize()
  }

  initialize() {

    this.object = this.context.physics.add.staticGroup()

    new Platform(this.context, this.object, 0, { x: 150, y: 450 }, 1)
    new Platform(this.context, this.object, 0, { x: 850, y: 450 }, 1)

    new Platform(this.context, this.object, 0, { x: 500, y: 600 }, 1)
    new Platform(this.context, this.object, 2, { x: 500, y: 275 }, 1)

    new Platform(this.context, this.object, 6, { x: 500, y: 750 }, 1)
  }
}

export default Platforms