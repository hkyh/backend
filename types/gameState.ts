import { PlayerMapPosition } from "./playerState";
import { PlayerTurn } from "./playerType";

export type GameState = {
    lastGameTimestamp: number,
    isGameStarted: boolean,
    isGameFinished: boolean,
    lastWinnersId: string | null,
    playerAId: string | null,
    playerBId: string | null,
    playerALocation: PlayerMapPosition | null,
    playerBLocation: PlayerMapPosition | null,
    nextMove: PlayerTurn,
};