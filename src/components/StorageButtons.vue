<script lang="ts">
import { store } from '../store/Store';

export default {
  setup() {
    return {
      store
    }
  }
};
</script>

<template>
  <div class="saveBtn">
    <button type="button" @click="store.get_storage_controller().save_game"> SAVE </button>
  </div>
  <div class="loadBtn">
    <button type="button" @click="store.get_storage_controller().load_game"> LOAD </button>
  </div>
  <div class="deleteBtn">
    <button type="button" @click="store.get_storage_controller().delete_game"> DELETE </button>
  </div>
</template>