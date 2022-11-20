export type PlayerMapPosition = {
  x: number;
  y: number;
  kmsLeft: number;
};

export type PlayerState = {
  stamina: number;
  hunger: number;
  hydration: number;
  isHideout: boolean;
  isOasis: boolean;
  position: PlayerMapPosition
};
