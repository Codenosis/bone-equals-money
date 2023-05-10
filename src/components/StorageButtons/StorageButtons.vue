<script lang="ts">
import { storage_controller } from '../../Controllers/Storage_controller'

export default {
  setup() {
    return {
      storage_controller
    }
  }
};
</script>

<template>
  <div class="saveBtn">
    <button type="button" @click="storage_controller.save_game"> SAVE </button>
  </div>
  <div class="loadBtn">
    <button type="button" @click="storage_controller.load_game"> LOAD </button>
  </div>
  <div class="deleteBtn">
    <button type="button" @click="storage_controller.delete_game"> DELETE </button>
  </div>
</template>