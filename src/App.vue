<template>
  <game />
</template>

<script>
import GameComponent from './components/GameComponent.vue'

export default {
  name: 'App',

  components: { game: GameComponent },
}
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>