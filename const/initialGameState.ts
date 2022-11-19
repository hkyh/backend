import { GameState } from "../types";
import { getUnixTimestamp } from "../utils";

export const initialGameState: GameState = {
    lastGameTimestamp: getUnixTimestamp(),
    isGameStarted: false,
    isGameFinished: false,
    lastWinnersId: null,
    playerA: null,
    playerB: null,
    playerALocation: null,
    playerBLocation: null,
    nextMove: "playerA",
};