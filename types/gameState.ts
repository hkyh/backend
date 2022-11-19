import { PlayerMapPosition } from "./playerState";
import { PlayerType } from "./playerType";

export type GameState = {
    lastGameTimestamp: number,
    isGameStarted: boolean,
    isGameFinished: boolean,
    lastWinnersId: string | null,
    playerA: string | null,
    playerB: string | null,
    playerALocation: PlayerMapPosition | null,
    playerBLocation: PlayerMapPosition | null,
    nextMove: PlayerType,
};