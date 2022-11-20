import { PlayerType } from "../types";
import { readGameState, readPlayer } from "../utils"
import { OasisProp, HideoutProp } from "../const";
import { Location } from "../types";

export class GameService {


static renderTourForPlayer = (player: PlayerType): Location[] => {
    let result = [] as Location[];
    const oasisRandom = Math.random();
    const hideoutRandom = Math.random();
    

    let playerDb = readPlayer(player);

   //logic for rendering
    const isOasis = (OasisProp + ((playerDb.oasisScouting / 100) / 5)) > oasisRandom;

    const isHideout = (HideoutProp + ((playerDb.hideoutScouting / 100) / 5)) > hideoutRandom;

    if (isOasis) {
        result.push("Oasis");
    }

    if (isHideout) {
        result.push("Hideout");
    }

    // TODO dopisanie tej listy do gracza ktory zaczyna ture


    return result;

}

}