import { reactive } from 'vue'

interface PlayerObject {
  bones: number
}

export const store = reactive({

  playerObject: {
    bones: 0,
  } as PlayerObject,
  
  increment() {
    this.playerObject.bones++
  },

  set_playerObject(new_object: PlayerObject) {
    this.playerObject = new_object
  }

})