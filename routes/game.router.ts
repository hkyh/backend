import { Router } from "express";
import { requestPlayerControl, showGameState, startGame } from "../controllers";

export const gameRouter = Router();

gameRouter.get("/state", showGameState);
gameRouter.post("/requestPlayer", requestPlayerControl);
gameRouter.post("/startGame", startGame);