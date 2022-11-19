import express from "express";
import bodyParser from "body-parser";
import { initGame } from "./game";
import { readGameState } from "./utils";

const app = express();
initGame();

app.use(bodyParser.json());

app.get("/game/gameState", (req, res) => {
    try {
        const currentGameState = readGameState();
        return res.status(200).send(currentGameState);
    } catch(error) {
        console.error("Game state route error", error);
        return res.status(500).json({
            error: true,
            message: "Game State not error"
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});