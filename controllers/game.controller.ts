import {
  getUnixTimestamp,
  newUuid,
  readGameState,
  writeGameState,
  writePlayer,
} from "../utils";
import { Request, Response } from "express";
import { initialPlayerState } from "../const";

export const showGameState = (req: Request, res: Response) => {
  try {
    const currentGameState = readGameState();
    return res.status(200).send(currentGameState);
  } catch (error) {
    console.error("Game state route error", error);
    return res.status(500).json({
      error: true,
      message: "Game State Router error",
    });
  }
};

export const requestPlayerControl = (req: Request, res: Response) => {
  try {
    const { playerType } = req.body;
    const gameState = readGameState();
    /* @ts-ignore */
    if (gameState[playerType]) {
      return res
        .status(400)
        .json({ error: true, message: `${playerType} already taken` });
    }
    /* @ts-ignore */
    gameState[playerType] = newUuid();
    /* @ts-ignore */
    gameState[`${playerType}Location`] = initialPlayerState.position;
    writeGameState(gameState);
    writePlayer(playerType, initialPlayerState);
    /* @ts-ignore */
    return res.status(200).json({ yourPlayerId: gameState[playerType] });
  } catch (error) {
    console.error("Request player error", error);
    return res.status(500).json({
      error: true,
      message: "Request player error",
    });
  }
};

export const startGame = (req: Request, res: Response) => {
  try {
    const gameState = readGameState();
    if (!gameState.playerA || !gameState.playerB) {
      return res
        .status(400)
        .json({ error: true, message: "Players not ready" });
    }
    gameState.isGameStarted = true;
    gameState.gameStartTimestamp = getUnixTimestamp();
    writeGameState(gameState);
    return res
      .status(200)
      .json({
        message: "Game has started",
        gameStartTimestamp: gameState.gameStartTimestamp,
      });
  } catch (error) {
    console.error("Start game error", error);
    return res.status(500).json({
      error: true,
      message: "Start game error",
    });
  }
};
