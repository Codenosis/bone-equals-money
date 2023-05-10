<script setup lang="ts">
import Button from './components/Button/Button.vue'
import Footer from './components/Footer/Footer.vue'
import Shop from './components/Shop/Shop.vue'
import { storage_controller } from './Controllers/Storage_controller';
import StorageButtons from './components/StorageButtons/StorageButtons.vue'

storage_controller.load_game()
storage_controller.timer_init()
</script>

<template>
  <Button />
  <Shop />
  <StorageButtons />
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
