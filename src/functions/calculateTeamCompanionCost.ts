import { CompanionSpecType } from "~/constants/companions";
import { FuctionType } from "~/constants/fuctions";
import { TeamCompanionType } from "~/contexts/TeamContext";

const THE_ORDER_ADDITIONAL_COST_PER_UNIT = 20;
export const calculateTeamCompanionCost = (
  companion: TeamCompanionType | CompanionSpecType,
  fuction: FuctionType
): number => {
  const aditionalCost =
    fuction.abbr === "TO" ? THE_ORDER_ADDITIONAL_COST_PER_UNIT : 0;

  if ("equipments" in companion) {
    return companion.equipments.reduce(
      (total, equipment) => total + equipment.cost,
      companion.cost + aditionalCost
    );
  }

  return companion.cost + aditionalCost;
};
