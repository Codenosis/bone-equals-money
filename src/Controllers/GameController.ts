import { store } from "../store/Store"

export const GameController = {
    gameLoop() {
        setInterval(() => {
            store.add_bones(store.get_bonesPerSecond())
        }, 100)
    }
}