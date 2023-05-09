import { reactive } from 'vue'

export const store = reactive({
  playerObject: {
    bones: 0,
    worms: 0
  },
  increment() {
    this.playerObject.bones++
  }
})