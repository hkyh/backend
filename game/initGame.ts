import { initialGameState } from "../const";
import { writeGameState } from "../utils";

export const initGame = () => writeGameState(initialGameState);