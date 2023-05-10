<script lang="ts">
import { StorageController } from '../../Controllers/StorageController.ts'

export default {
  setup() {
    return {
      StorageController
    }
  }
};
</script>

<template>
  <div class="saveBtn">
    <button type="button" @click="StorageController.save_game"> SAVE </button>
  </div>
  <div class="loadBtn">
    <button type="button" @click="StorageController.load_game"> LOAD </button>
  </div>
  <div class="deleteBtn">
    <button type="button" @click="StorageController.delete_game"> DELETE </button>
  </div>
</template>