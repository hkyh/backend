import {
  getUnixTimestamp,
  newUuid,
  readGameState,
  readPlayer,
  writeGameState,
  writePlayer,
} from "../utils";
import { Request, Response } from "express";
import { baseMultiplier, initialPlayerState } from "../const";
import { makeMove } from "../game/makeMove";

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
    return res.status(200).json({
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

export const movePlayer = (req: Request, res: Response) => {
  try {
    const { playerType, playerId, risk, hideout, oasis } = req.body;
    const gameState = readGameState();
    if (gameState.playerA !== playerId && gameState.playerB !== playerId) {
      return res.status(400).json({ error: true, message: "Wrong Id" });
    }
    if (!gameState.isGameStarted) {
      return res
        .status(400)
        .json({ error: true, message: "Game not started not" });
    }

    const currentPlayer = readPlayer(playerType);
    if(currentPlayer.hunger >= 100 || currentPlayer.hydration <= 0 || currentPlayer.stamina <= 0) {
      return res
        .status(400)
        .json({ error: true, message: "The Giraffe is dead" });
    }
    const kmPassed = makeMove(currentPlayer.stamina, currentPlayer.hydration, currentPlayer.hunger);
    const kmsLeft = currentPlayer.position.kmsLeft - (kmPassed + (risk * baseMultiplier));
    currentPlayer.stamina = currentPlayer.stamina - (10 * baseMultiplier) + (hideout * baseMultiplier);
    currentPlayer.hydration = currentPlayer.hydration - (10 * baseMultiplier) + (oasis * baseMultiplier);
    currentPlayer.hunger = currentPlayer.hunger + (10 * baseMultiplier) + (hideout * baseMultiplier);
    currentPlayer.position.kmsLeft = kmsLeft;
    gameState.nextMove = playerType === "playerA" ? "playerB" : "playerA";
    /* @ts-ignore */
    gameState[`${playerType}Location`] = currentPlayer.position;
    writePlayer(playerType, currentPlayer);
    writeGameState(gameState);
    return res.status(200).json({ playerMoved: currentPlayer.position });
  } catch (error) {
    console.error("Player move error", error);
    return res.status(500).json({
      error: true,
      message: "Player move error",
    });
  }
};
