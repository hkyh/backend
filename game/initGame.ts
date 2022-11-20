import { initialGameState, initialPlayerState } from "../const";
import { writeGameState, writePlayer } from "../utils";

export const initGame = () => {
    writeGameState(initialGameState);
    writePlayer('playerA', initialPlayerState);
    writePlayer('playerB', initialPlayerState);
};