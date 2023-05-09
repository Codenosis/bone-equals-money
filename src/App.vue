<script setup lang="ts">
import Button from './components/Button.vue'
import Footer from './components/Footer/Footer.vue'
import StorageButtons from './components/StorageButtons.vue'
import { storage_controller } from './controllers/Storage_controller';

storage_controller.load_game()
</script>

<template>
  <Button/>
  <StorageButtons/>
  <Footer/>
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
