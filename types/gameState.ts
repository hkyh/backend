import { PlayerMapPosition } from "./playerState";
import { PlayerType } from "./playerType";
import { Location } from "../types";

export type GameState = {
    lastGameTimestamp: number,
    gameStartTimestamp: number | null,
    isGameStarted: boolean,
    isGameFinished: boolean,
    lastWinnersId: string | null,
    playerA: string | null,
    playerB: string | null,
    playerALocation: PlayerMapPosition | null,
    playerBLocation: PlayerMapPosition | null,
    playerAObjects: Location[],
    playerBObjects: Location[],
    nextMove: PlayerType,
};