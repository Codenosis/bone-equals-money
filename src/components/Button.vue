<script lang="ts">
import { store } from '../store/Store';

export default {
  setup() {
    return {
      store
    }
  }
}

console.info(store.playerObject)

</script>
<template>
  <div>
    <button type="button" @click="store.increment()">you have {{ store.playerObject.bones }} bones</button>
  </div>
</template>