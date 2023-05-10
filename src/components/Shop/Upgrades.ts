interface Upgrade {
    name: string
    basePrice: number
    amountOwned: number
    unlocked: boolean
}
const upgrades: Upgrade[] = [
    {
        name: "First Upgrade",
        basePrice: 30,
        amountOwned: 0,
        unlocked: true
    },
    {
        name: "Second Upgrade",
        basePrice: 100,
        amountOwned: 0,
        unlocked: false
    },
    {
        name: "Third Upgrade",
        basePrice: 1000,
        amountOwned: 0,
        unlocked: false
    }
]
export default upgrades