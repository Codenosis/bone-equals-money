import { store } from "../store/Store"

export const storage_controller = {
    save_game() {
        return localStorage.setItem("save", store.playerObject);
    },

    load_game() {
        return localStorage.getItem("save")
    },

    delete_game() {
        localStorage.removeItem("save")
        localStorage.clear
    },

    timer_init() {
        console.info("initiating save timer")
        setInterval(() => this.save_game(), 10000)
    }
}