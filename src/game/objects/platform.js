class Platform {
  constructor(context, object, size, position, scale = 1) {
    this.context = context
    this.object = object
    this.size = size
    this.position = position
    this.scale = scale

    this.initialize()
  }

  initialize() {
    const platformLeftWidth = this.context.textures.get('platform-l').getSourceImage().width
    const platformCenterWidth = this.context.textures.get('platform-c').getSourceImage().width
    const platformRightWidth = this.context.textures.get('platform-r').getSourceImage().width

    let platformLeftPosition =
      this.position.x -
      (platformLeftWidth / 2) -
      (platformLeftWidth * (this.size / 2))

    let platformRightPosition =
      this.position.x +
      (platformRightWidth / 2) +
      (platformRightWidth * (this.size / 2))

    let platformCenterPosition =
      this.position.x -
      (platformCenterWidth / 2) -
      (platformCenterWidth * (this.size / 2 - 1))


    this.object.create(
      platformLeftPosition,
      this.position.y,
      'platform-l'
    ).setScale(this.scale).refreshBody()

    for (let i = 0; i < this.size; i++) {
      this.object.create(
        platformCenterPosition,
        this.position.y,
        'platform-c'
      ).setScale(this.scale).refreshBody()

      platformCenterPosition += platformCenterWidth * this.scale
    }

    this.object.create(
      platformRightPosition,
      this.position.y,
      'platform-r'
    ).setScale(this.scale).refreshBody()
  }
}

export default Platform