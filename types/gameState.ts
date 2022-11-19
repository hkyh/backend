import { PlayerTurn } from "./playerType";

export type GameState = {
    lastGameTimestamp: number,
    isGameStarted: boolean,
    isGameFinished: boolean,
    lastWinnersId: string,
    currentPlayerA: string,
    currentPlayerB: string,
    nextMove: PlayerTurn,
};