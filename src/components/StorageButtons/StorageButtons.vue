<script lang="ts">
import { storage_controller } from '../../controllers/Storage_controller'

export default {
  setup() {
    return {
      storage_controller
    }
  }
};
</script>

<template>
  <div class="optionsBar">
      <button type="button" @click="storage_controller.save_game"> SAVE </button>
      <button type="button" @click="storage_controller.load_game"> LOAD </button>
      <button type="button" @click="storage_controller.delete_game"> DELETE </button>
  </div>
</template>

<style scoped>
  .optionsBar {
    height: 100%;
    width: 300px;
    max-width: 1024px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    box-sizing: border-box; 
    }

    .container-grid {
      margin-left: 330px;
    }
</style>