class Cursors {
  constructor(context) {
    this.context = context
    this.object = undefined

    this.initialize()
  }

  initialize() {
    this.controller = this.context.input.keyboard.createCursorKeys()
  }
}

export default Cursors