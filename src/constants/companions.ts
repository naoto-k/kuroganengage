import { UnitSpecType } from "~/contexts/TeamContext";

type CompanionSpecType = {
  hdp: number;
} & UnitSpecType;

export const COMPANION_SPECS: CompanionSpecType[] = [
  {
    name: "Normal Frame",
    cost: 30,
    bAp: 1,
    hp: 3,
    arm: 8,
    mv: 2,
    hdp: 3,
  },
  {
    name: "Large Frame",
    cost: 45,
    bAp: 1,
    hp: 4,
    arm: 10,
    mv: 2,
    hdp: 4,
  },
] as const;
export type { CompanionSpecType };
