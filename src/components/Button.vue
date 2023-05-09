<script lang="ts">
import { store } from '../store/Store';

export default {
  setup() {
    return {
      store
    }
  }
}

</script>

<template>
  <div>
    <button type="button" @click="store.increment()">you have {{ store.playerObject.bones }} bones</button>
  </div>
  <div class="saveBtn">
    <button type="button" @click="store.save_game"> SAVE </button>
  </div>
  <div class="loadBtn">
    <button type="button" @click="store.load_game"> LOAD </button>
  </div>
  <div class="deleteBtn">
    <button type="button" @click="store.delete_game"> DELETE </button>
  </div>
</template>
