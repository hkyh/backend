import { GameState } from "../types";
import { getUnixTimestamp } from "../utils";

export const initialGameState: GameState = {
    lastGameTimestamp: getUnixTimestamp(),
    isGameStarted: false,
    isGameFinished: false,
    lastWinnersId: "",
    playerAId: null,
    playerBId: null,
    playerALocation: null,
    playerBLocation: null,
    nextMove: "PlayerA",
};