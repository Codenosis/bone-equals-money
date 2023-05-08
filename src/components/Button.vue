<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <button type="button" @click="count++">you have {{ count }} bones</button>
  </div>
  CODENOSIS
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
