import { store } from "../store/Store"

export const storage_controller = {
    save_game() {
        return localStorage.setItem("save", JSON.stringify(store.playerObject));
    },

    load_game() {
        console.log("loaded smile")
        store.set_playerObject(JSON.parse(localStorage.getItem("save") ?? JSON.stringify({ bones: 0 })))
        return localStorage.getItem("save")
    },

    delete_game() {
        localStorage.removeItem("save")
        localStorage.clear
        this.load_game()
    },

    timer_init() {
        console.info("initiating save timer")
        setInterval(() => this.save_game(), 10000)
    }
}