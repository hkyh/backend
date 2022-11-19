import { GameState } from "../types";
import { getUnixTimestamp } from "../utils";

export const initialGameState: GameState = {
    lastGameTimestamp: getUnixTimestamp(),
    isGameStarted: false,
    isGameFinished: false,
    lastWinnersId: "",
    currentPlayerA: "",
    currentPlayerB: "",
    nextMove: "PlayerA"
};