import { Router } from "express";
import { showGameState } from "../controllers";

export const gameRouter = Router();

gameRouter.get("/state", showGameState);