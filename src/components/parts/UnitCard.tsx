import {
  Grid2,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { ReactNode } from "react";

import { UnitAvatar } from "~/components/parts/UnitAvatar";
import { UnitType } from "~/contexts/TeamContext";

type PropsType = {
  unit: UnitType;
  actionNode?: ReactNode;
};
const PointArea = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  paddingBlock: theme.spacing(1),
  paddingInline: theme.spacing(2),
}));
export const UnitCard = ({ unit, actionNode }: PropsType) => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{ p: 1, alignItems: "stretch", borderBottom: 1 }}
    >
      <Grid2>
        <UnitAvatar src={unit.avatar} />
      </Grid2>
      <Grid2
        container
        size="grow"
        alignItems="flex-start"
        direction="column"
        spacing={0}
      >
        <Typography variant="body1">{unit.name}</Typography>
        <List dense disablePadding>
          {["hoge", "fuga"].map((text) => (
            <ListItem key={text}>
              <ListItemText>・{text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid2>
      <Grid2
        container
        direction="column"
        sx={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        {actionNode && actionNode}
        <PointArea variant="outlined">
          <Typography variant="subtitle2">{unit.cost} Points</Typography>
        </PointArea>
      </Grid2>
    </Grid2>
  );
};
