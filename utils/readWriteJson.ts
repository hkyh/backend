import { readFileSync, writeFileSync } from "fs";
import { GameState, PlayerState, PlayerType } from "../types";

export const readPlayer = (player: PlayerType): PlayerState => {
  const playerFile = readFileSync(`./jsonBase/${player}`);
  const parsedPlayer = JSON.parse(String(playerFile));
  return parsedPlayer;
};

export const writePlayer = (player: PlayerType, playerState: PlayerState) => {
  const playerFile = JSON.stringify(playerState, null, 2);
  writeFileSync(`./jsonBase/${player}.json`, playerFile);
};

export const readGameState = (): GameState => {
  const gameStateFile = readFileSync("./jsonBase/gameState.json");
  const parsedGameState = JSON.parse(String(gameStateFile));
  return parsedGameState;
};

export const writeGameState = (gameState: GameState) => {
  const gameStateFile = JSON.stringify(gameState, null, 2);
  writeFileSync('./jsonBase/gameState.json', gameStateFile);
};
