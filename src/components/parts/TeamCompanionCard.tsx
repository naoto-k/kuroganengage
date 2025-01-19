import { List, ListItem, ListItemText } from "@mui/material";
import { ReactNode } from "react";

import { CompanionSpecCard } from "~/components/parts/CompanionSpecCard";
import { THE_ORDER_ADDITIONAL_COST_PER_UNIT } from "~/constants/fuctions";
import { TeamCompanionType, useTeamContext } from "~/contexts/TeamContext";

type PropsType = {
  companion: TeamCompanionType;
  actionNode?: ReactNode;
};
export const TeamCompanionCard = ({ companion, actionNode }: PropsType) => {
  const { fuction } = useTeamContext();
  const cost = companion.equipments.reduce(
    (total, equipment) => total + equipment.cost,
    companion.cost +
      (fuction.abbr === "TO" ? THE_ORDER_ADDITIONAL_COST_PER_UNIT : 0)
  );

  return (
    <CompanionSpecCard
      companion={companion}
      cost={cost}
      actionNode={actionNode}
    >
      <List dense disablePadding>
        {companion.equipments.map((equipment) => (
          <ListItem key={equipment.uuid}>
            <ListItemText>{equipment.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </CompanionSpecCard>
  );
};
