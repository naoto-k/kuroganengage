type FuctionType = {
  name: string;
  abbr: string;
};

export const FUCTIONS: FuctionType[] = [
  {
    name: "The Order",
    abbr: "TO",
  },
  {
    name: "Unchained",
    abbr: "UC",
  },
  {
    name: "Conductors",
    abbr: "CO",
  },
] as const;
export const FUCTION_ABBRS = FUCTIONS.map((f) => f.abbr);
export const FUCTION_NAMES = FUCTIONS.map((f) => f.name);
export const THE_ORDER_ADDITIONAL_COST_PER_UNIT = 20;

type FuctionNameType = (typeof FUCTIONS)[number]["name"];
type FuctionAbbrType = (typeof FUCTIONS)[number]["abbr"];

export type { FuctionType, FuctionNameType, FuctionAbbrType };
