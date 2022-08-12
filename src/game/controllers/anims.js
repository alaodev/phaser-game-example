class Anims {
  constructor(context) {
    this.context = context

    this.initalize()
  }

  initalize() {
    this.context.anims.create({
      key: 'left',
      frames: this.context.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.context.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });

    this.context.anims.create({
      key: 'right',
      frames: this.context.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}

export default Anims