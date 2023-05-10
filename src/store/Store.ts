import { reactive } from 'vue'

interface PlayerObject {
  bones: number
  bonesPerSecond: number
}

export const store = reactive({

  playerObject: {
    bones: 0,
    bonesPerSecond: 1
  } as PlayerObject,

  increment() {
    this.playerObject.bones++
  },

  set_playerObject(new_object: PlayerObject) {
    this.playerObject = new_object
  },
  get_bones() {
    return this.playerObject.bones
  },
  add_bones(addedValue: number) {
    this.playerObject.bones += addedValue
  },
  set_bonesPerSecond(addedValue: number) {
    this.playerObject.bonesPerSecond += addedValue
  },
  get_bonesPerSecond() {
    return this.playerObject.bonesPerSecond
  }

})