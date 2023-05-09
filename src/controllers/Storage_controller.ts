export const storage_controller = {
    save_game(playerObject: string) {
        return localStorage.setItem("save", playerObject);
      },

    load_game(key: string) {
        return localStorage.getItem(key)
    },

    delete_game() {
        localStorage.removeItem("save")
        localStorage.clear
    }
}