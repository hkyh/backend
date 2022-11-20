import { Router } from "express";
import { hardrestartGame, movePlayer, requestPlayerControl, showGameState, startGame } from "../controllers";

export const gameRouter = Router();

gameRouter.get("/state", showGameState);
gameRouter.post("/requestPlayer", requestPlayerControl);
gameRouter.post("/start", startGame);
gameRouter.post("/movePlayer", movePlayer);
gameRouter.post("/restart", startGame);
gameRouter.post("/hardStart", hardrestartGame);