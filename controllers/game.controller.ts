import { readGameState } from "../utils";
import { Request, Response } from 'express';

export const showGameState = (req: Request, res: Response) => {
  try {
    const currentGameState = readGameState();
    return res.status(200).send(currentGameState);
  } catch (error) {
    console.error("Game state route error", error);
    return res.status(500).json({
      error: true,
      message: "Game State not error",
    });
  }
};
