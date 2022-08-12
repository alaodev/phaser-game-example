import Phaser from 'phaser'

import mainScene from '@/game/scenes/main'

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [mainScene]
}