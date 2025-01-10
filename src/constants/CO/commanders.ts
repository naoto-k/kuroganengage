import Cntr from "~/assets/units/CO/cntr.png";
import Ctp from "~/assets/units/CO/ctp.png";
import Pnpt from "~/assets/units/CO/pnpt.png";
import Stst from "~/assets/units/CO/stst.png";
import Swt from "~/assets/units/CO/swt.png";
import { UnitType } from "~/contexts/TeamContext";

export const CO_COMMANDERS: UnitType[] = [
  {
    name: "Swallowtail",
    cost: 130,
    avatar: Swt,
    bAp: 7,
    hp: 4,
    arm: 8,
    mv: 2,
  },
  {
    name: "Cataphract",
    cost: 135,
    avatar: Ctp,
    bAp: 7,
    hp: 4,
    arm: 8,
    mv: 2,
  },
  {
    name: "Panopticon",
    cost: 130,
    avatar: Pnpt,
    bAp: 5,
    hp: 5,
    arm: 10,
    mv: 2,
  },
  {
    name: "Shooting Star",
    cost: 125,
    avatar: Stst,
    bAp: 3,
    hp: 5,
    arm: 9,
    mv: 2,
  },
  {
    name: "Centurio",
    cost: 145,
    avatar: Cntr,
    bAp: 5,
    hp: 5,
    arm: 10,
    mv: 2,
  },
];
