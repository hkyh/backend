import { baseKMs } from "../const";

export const makeMove = (
  stamina: number,
  hydration: number,
  hunger: number
) => {
  const kmBasedOnHydrationAndStamina = baseKMs * stamina + baseKMs * hydration;
  const hungerPercentage = hunger / 100;
  const realKMs =
    kmBasedOnHydrationAndStamina -
    kmBasedOnHydrationAndStamina * hungerPercentage;

  return realKMs;
};
