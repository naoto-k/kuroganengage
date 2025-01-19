import { List, ListItem, ListItemText } from "@mui/material";
import { ReactNode } from "react";

import { CompanionSpecCard } from "~/components/parts/CompanionSpecCard";
import { TeamCompanionType, useTeamContext } from "~/contexts/TeamContext";
import { calculateTeamCompanionCost } from "~/functions/calculateTeamCompanionCost";

type PropsType = {
  companion: TeamCompanionType;
  actionNode?: ReactNode;
};
export const TeamCompanionCard = ({ companion, actionNode }: PropsType) => {
  const { fuction } = useTeamContext();

  return (
    <CompanionSpecCard
      companion={companion}
      cost={calculateTeamCompanionCost(companion, fuction)}
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
