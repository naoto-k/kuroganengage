import Cntr from "~/assets/units/CO/cntr.png";
import Ctp from "~/assets/units/CO/ctp.png";
import Pnpt from "~/assets/units/CO/pnpt.png";
import Stst from "~/assets/units/CO/stst.png";
import Swt from "~/assets/units/CO/swt.png";
import Arbsk from "~/assets/units/TO/arbsk.png";
import Bys from "~/assets/units/TO/bys.png";
import Otw from "~/assets/units/TO/otw.png";
import Snnm from "~/assets/units/TO/snnm.png";
import Tst from "~/assets/units/TO/tst.png";
import Bcf from "~/assets/units/UC/bcf.png";
import Btk from "~/assets/units/UC/btk.png";
import Cmnd from "~/assets/units/UC/cmnd.png";
import Svg from "~/assets/units/UC/svg.png";
import Wth from "~/assets/units/UC/wth.png";
import {
  ALL_EQUIPMENTS,
  EquipmentAbbrType,
  EquipmentSpecType,
} from "~/constants/equipments";
import { FuctionAbbrType } from "~/constants/fuctions";
import { UnitEquipmentType, UnitSpecType } from "~/contexts/TeamContext";
import { randomUUID } from "~/functions/randomUUID";

type CommanderSpecType = {
  equipments: UnitEquipmentType[];
} & UnitSpecType;

const takeEquipments = (abbrs: EquipmentAbbrType[]): UnitEquipmentType[] => {
  return abbrs.map((abbr) => {
    const equipmentSpec = ALL_EQUIPMENTS.find(
      (e) => e.abbr === abbr
    ) as EquipmentSpecType;

    return { ...equipmentSpec, uuid: randomUUID() };
  });
};
export const COMMANDER_SPECS: {
  [key in FuctionAbbrType]: CommanderSpecType[];
} = {
  CO: [
    {
      name: "Swallowtail",
      cost: 130,
      avatar: Swt,
      bAp: 7,
      hp: 4,
      arm: 8,
      mv: 2,
      equipments: takeEquipments(["RFL", "SLD"]),
    },
    {
      name: "Cataphract",
      cost: 135,
      avatar: Ctp,
      bAp: 7,
      hp: 4,
      arm: 8,
      mv: 2,
      equipments: takeEquipments(["RFL", "RFL"]),
    },
    {
      name: "Panopticon",
      cost: 130,
      avatar: Pnpt,
      bAp: 5,
      hp: 5,
      arm: 10,
      mv: 2,
      equipments: takeEquipments(["SMG", "GRD", "CCW", "SLD"]),
    },
    {
      name: "Shooting Star",
      cost: 125,
      avatar: Stst,
      bAp: 3,
      hp: 5,
      arm: 9,
      mv: 2,
      equipments: takeEquipments(["SMG", "GRD", "PLB"]),
    },
    {
      name: "Centurio",
      cost: 145,
      avatar: Cntr,
      bAp: 5,
      hp: 5,
      arm: 10,
      mv: 2,
      equipments: takeEquipments(["SHG", "MSL"]),
    },
  ],
  UC: [
    {
      name: "Savage",
      cost: 125,
      avatar: Svg,
      bAp: 6,
      hp: 5,
      arm: 9,
      mv: 3,
      equipments: takeEquipments(["SMG", "CCW", "SLD", "HS"]),
    },
    {
      name: "Wellcome To Heaven",
      cost: 125,
      avatar: Wth,
      bAp: 3,
      hp: 6,
      arm: 10,
      mv: 3,
      equipments: takeEquipments(["SHG", "LCCW"]),
    },
    {
      name: "Commandment",
      cost: 135,
      avatar: Cmnd,
      bAp: 6,
      hp: 5,
      arm: 10,
      mv: 2,
      equipments: takeEquipments(["CCW", "ACN"]),
    },
    {
      name: "Butterfly Kiss",
      cost: 85,
      avatar: Btk,
      bAp: 5,
      hp: 4,
      arm: 7,
      mv: 3,
      equipments: takeEquipments(["SMG", "SMG", "HS"]),
    },
    {
      name: "Blazing Crimson Flame",
      cost: 120,
      avatar: Bcf,
      bAp: 4,
      hp: 5,
      arm: 9,
      mv: 3,
      equipments: takeEquipments(["CCW", "CCW", "SLD", "HS"]),
    },
  ],
  TO: [
    {
      name: "By Your Side",
      avatar: Bys,
      cost: 110,
      bAp: 4,
      hp: 5,
      arm: 10,
      mv: 2,
      equipments: takeEquipments(["SLD", "ACN"]),
    },
    {
      name: "Arabesque",
      cost: 120,
      avatar: Arbsk,
      bAp: 5,
      hp: 5,
      arm: 10,
      mv: 2,
      equipments: takeEquipments(["PLB", "SLD", "MSL"]),
    },
    {
      name: "Testament",
      cost: 105,
      avatar: Tst,
      bAp: 4,
      hp: 5,
      arm: 9,
      mv: 3,
      equipments: takeEquipments(["SHG", "CCW", "HS"]),
    },
    {
      name: "Otherwise",
      cost: 100,
      avatar: Otw,
      bAp: 5,
      hp: 5,
      arm: 10,
      mv: 2,
      equipments: takeEquipments(["SHG", "SLD"]),
    },
    {
      name: "Shinonome",
      cost: 140,
      avatar: Snnm,
      bAp: 6,
      hp: 5,
      arm: 9,
      mv: 3,
      equipments: takeEquipments(["LCCW", "SLD", "HS"]),
    },
  ],
} as const;
export type { CommanderSpecType };
