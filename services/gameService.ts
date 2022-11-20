import { OasisProp, HideoutProp } from "../const";
import { Location } from "../types";

export const randomiseRestingPoints = (oasisScouting: number, hideoutScouting: number): Location[] => {
  const result = [] as Location[];
  const isOasis =
    OasisProp + oasisScouting / 100 / 5 > Math.random();
  const isHideout =
    HideoutProp + hideoutScouting / 100 / 5 > Math.random();

  if (isOasis) {
    result.push("Oasis");
  }

  if (isHideout) {
    result.push("Hideout");
  }

  return result;
};
