import { reactive } from 'vue'
import  { storage_controller }  from '../controllers/Storage_controller'

export const store = reactive({

  playerObject: JSON.parse(storage_controller.load_game() ?? JSON.stringify({bones: 0})),
  increment() {
    this.playerObject.bones++
  },  

  get_storage_controller() {
    return storage_controller
  }

})