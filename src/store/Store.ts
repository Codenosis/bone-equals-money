import { reactive } from 'vue'
import  { storage_controller }  from '../controllers/Storage_controller'

export const store = reactive({

  playerObject: JSON.parse(storage_controller.load_game("save") ?? JSON.stringify({bones: 0})),
  count: 0,
  increment() {
    this.playerObject.bones++
  },

  save_game() {
    storage_controller.save_game(JSON.stringify(this.playerObject))
    console.info("saved")
  },

  load_game() {
    this.playerObject = JSON.parse(storage_controller.load_game("save") ?? "0")
    console.info("loaded")
  },

  delete_game() {
    storage_controller.delete_game()
    this.playerObject.bones = 0    
  }
})



