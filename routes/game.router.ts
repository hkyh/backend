import { Router } from "express";
import { requestPlayerControl, showGameState } from "../controllers";

export const gameRouter = Router();

gameRouter.get("/state", showGameState);
gameRouter.post("/requestPlayer", requestPlayerControl);