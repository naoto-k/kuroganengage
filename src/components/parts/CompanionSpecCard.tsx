import { ReactNode } from "react";

import { UnitCard, UnitCardPropsType } from "~/components/parts/UnitCard";
import { CompanionSpecType } from "~/constants/companions";

type PropsType = Omit<UnitCardPropsType, "unit"> & {
  companion: CompanionSpecType;
  actionNode?: ReactNode;
};
export const CompanionSpecCard = ({ companion, ...props }: PropsType) => {
  return <UnitCard {...props} unit={companion} />;
};
