import { List, ListItem, ListItemText } from "@mui/material";
import { ReactNode } from "react";

import { UnitCard, UnitCardPropsType } from "~/components/parts/UnitCard";
import { CommanderSpecType } from "~/constants/commanders";

type PropsType = Omit<UnitCardPropsType, "unit"> & {
  commander: CommanderSpecType;
  actionNode?: ReactNode;
};
export const CommanderCard = ({ commander, ...props }: PropsType) => {
  return (
    <UnitCard {...props} unit={commander}>
      <List dense disablePadding>
        {commander.equipments.map((equipment) => (
          <ListItem key={equipment.uuid}>
            <ListItemText>{equipment.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </UnitCard>
  );
};
