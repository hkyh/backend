import { readFileSync, writeFileSync } from "fs";
import { GameState, PlayerState, PlayerTurn } from "../types";

export const readPlayer = (player: PlayerTurn) => {
  const playerFile = readFileSync(`./jsonBase/${player}`);
  const parsedPlayer = JSON.parse(String(playerFile));
  return parsedPlayer;
};

export const writePlayer = (player: string, playerState: PlayerState) => {
  const playerFile = JSON.stringify(playerState, null, 2);
  writeFileSync(`./jsonBase/${player}`, playerFile);
};

export const readGameState = () => {
  const gameStateFile = readFileSync("./jsonBase/gameState.json");
  const parsedGameState = JSON.parse(String(gameStateFile));
  return parsedGameState;
};

export const writeGameState = (gameState: GameState) => {
  const gameStateFile = JSON.stringify(gameState, null, 2);
  writeFileSync('./jsonBase/gameState.json', gameStateFile);
};
