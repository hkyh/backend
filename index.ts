import express from "express";
import { initGame } from "./game";
import { gameRouter } from "./routes";

const app = express();
initGame();

app.use(express.json());

app.use('/game', gameRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});