<template>
  <div class="game">
    <ion-phaser :game.prop="game" :initialize.prop="initialize" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import gameConfig from '@/game/config'

export default {
  name: 'GameComponent',

  setup() {
    const initialize = ref(false)
    const game = ref(gameConfig)

    onMounted(() => initialize.value = true)

    return {
      initialize,
      game,
    }
  }
}
</script>

<style scoped>
.game {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
</style>
