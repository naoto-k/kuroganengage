export const EQUIPMENTS = [
  {
    name: "Submachine Gun",
    abbr: "SMG",
    cost: 5,
    hit: 5,
    rng: 2,
    pow: 3,
    hdp: 1,
    abilities: [],
  },
  {
    name: "Grenade Launcher",
    abbr: "GRD",
    cost: 10,
    hit: 4,
    rng: 3,
    pow: 4,
    hdp: 1,
    abilities: ["Suppression", "Indirect"],
  },
  {
    name: "Rifle",
    abbr: "RFL",
    cost: 15,
    hit: 4,
    rng: 4,
    pow: 4,
    hdp: 2,
    abilities: ["AP:1"],
  },
  {
    name: "Shotgun",
    abbr: "SHG",
    cost: 15,
    hit: 6,
    rng: 1,
    pow: 4,
    hdp: 2,
    abilities: [],
  },
  {
    name: "Close Combat Weapon",
    abbr: "CCW",
    cost: 10,
    hit: 4,
    rng: "C",
    pow: 8,
    hdp: 1,
    abilities: ["AP:1", "Power Attack"],
  },
  {
    name: "Pile Bunker",
    abbr: "PLB",
    cost: 20,
    hit: 1,
    rng: "C",
    pow: 8,
    hdp: 1,
    abilities: ["AP:Crt", "Hard Hit"],
  },
  {
    name: "Shield",
    abbr: "SLD",
    cost: 10,
    hdp: 1,
    abilities: ["re:DEF"],
  },
  {
    name: "High Speed",
    abbr: "HS",
    cost: 5,
    hdp: 1,
    abilities: ["MV:+1", "ARM:-1"],
  },
] as const;
export const HEAVY_EQUIPMENTS = [
  {
    name: "Auto Cannon",
    abbr: "ACN",
    cost: 40,
    hit: 3,
    rng: 4,
    pow: 7,
    hdp: 3,
    abilities: ["Heavy", "Push", "AP:2"],
  },
  {
    name: "Large Close Combat Weapon",
    abbr: "LCCW",
    cost: 20,
    hit: 4,
    rng: "C",
    pow: 9,
    hdp: 2,
    abilities: ["Heavy", "AP:2", "Power Attack"],
  },
  {
    name: "Missile Launcher",
    abbr: "MSL",
    cost: 20,
    hit: 4,
    rng: 5,
    pow: 6,
    hdp: 2,
    abilities: ["Heavy", "Indirect"],
  },
] as const;
export const ALL_EQUIPMENTS = [...EQUIPMENTS, ...HEAVY_EQUIPMENTS] as const;
type EquipmentAbbrType = (typeof ALL_EQUIPMENTS)[number]["abbr"];
type EquipmentSpecType = {
  name: string;
  abbr: EquipmentAbbrType;
  cost: number;
  hit?: number;
  rng?: number | "C";
  pow?: number;
  hdp: number;
  abilities: readonly string[];
};
export type { EquipmentSpecType, EquipmentAbbrType };
