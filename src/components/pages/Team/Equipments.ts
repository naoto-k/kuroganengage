type AbilityType =
  | "IF"
  | `AP:${number | "Crt"}`
  | "PA"
  | "HH"
  | "re:DEF"
  | "HS";
type EquipmentType = {
  name: string;
  cost: number;
  hit?: number;
  rng?: number | "C";
  pow?: number;
  eq: number;
  abilities: AbilityType[];
};

const EQUIPMENTS: EquipmentType[] = [
  {
    name: "SMG",
    cost: 5,
    hit: 5,
    rng: 2,
    pow: 3,
    eq: 1,
    abilities: [],
  },
  {
    name: "GRD",
    cost: 10,
    hit: 4,
    rng: 3,
    pow: 4,
    eq: 1,
    abilities: ["IF"],
  },
  {
    name: "RFL",
    cost: 15,
    hit: 4,
    rng: 4,
    pow: 4,
    eq: 2,
    abilities: ["AP:1"],
  },
  {
    name: "SHG",
    cost: 15,
    hit: 6,
    rng: 1,
    pow: 4,
    eq: 1,
    abilities: [],
  },
  {
    name: "CCW",
    cost: 10,
    hit: 4,
    rng: "C",
    pow: 8,
    eq: 1,
    abilities: ["AP:1", "PA"],
  },
  {
    name: "SLD",
    cost: 15,
    eq: 1,
    abilities: ["re:DEF"],
  },
  {
    name: "HS",
    cost: 5,
    eq: 1,
    abilities: ["HS"],
  },
];
export { EQUIPMENTS };
export type { EquipmentType, AbilityType };
