export type PlayerState = {
    stamina: number,
    hunger: number,
    hydration: number,
    position: {
        x: number,
        y: number
    },
    isHideout: boolean,
    isOasis: boolean
}