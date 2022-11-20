import { GameState, Location } from "../types";
import { getUnixTimestamp } from "../utils";

export const initialGameState: GameState = {
    lastGameTimestamp: getUnixTimestamp(),
    gameStartTimestamp: null,
    isGameStarted: false,
    isGameFinished: false,
    lastWinnersId: null,
    playerA: null,
    playerB: null,
    playerALocation: null,
    playerBLocation: null,
    playerAObjects: [] as Location[],
    playerBObjects: [] as Location[],
    nextMove: "playerA",
};