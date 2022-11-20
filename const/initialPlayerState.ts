import { PlayerState } from "../types";
import { kmsLeft } from "./baseKMs";

export const initialPlayerState: PlayerState = {
  stamina: 100,
  hunger: 0,
  hydration: 100,
  isHideout: false,
  isOasis: false,
  position: {
    x: 0,
    y: 0,
    kmsLeft
  },
  oasisScouting: 0,
  hideoutScouting: 0,
};