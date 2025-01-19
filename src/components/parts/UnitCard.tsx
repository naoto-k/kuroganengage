import { Paper, Typography, styled } from "@mui/material";
import { ReactNode } from "react";

import { GridCell } from "~/components/parts/GridCell";
import { GridContainer } from "~/components/parts/GridContainer";
import { UnitAvatar } from "~/components/parts/UnitAvatar";
import { UnitSpecType } from "~/contexts/TeamContext";

type PropsType = {
  unit: UnitSpecType;
  cost?: number;
  actionNode?: ReactNode;
  children?: ReactNode;
};
const PointArea = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  paddingBlock: theme.spacing(1),
  paddingInline: theme.spacing(2),
}));
export const UnitCard = ({
  unit,
  cost = unit.cost,
  actionNode,
  children,
}: PropsType) => {
  return (
    <GridContainer
      spacing={2}
      sx={{ p: 1, alignItems: "stretch", borderBottom: 1 }}
    >
      <GridCell>
        <UnitAvatar src={unit.avatar} />
      </GridCell>
      <GridContainer size="grow" alignItems="flex-start" direction="column">
        <Typography>{unit.name}</Typography>
        {children}
      </GridContainer>
      <GridContainer
        direction="column"
        sx={{ justifyContent: "flex-start", alignItems: "flex-end" }}
        spacing={1}
      >
        {actionNode && actionNode}
        <PointArea variant="outlined">
          <Typography variant="subtitle2">{cost} Points</Typography>
        </PointArea>
      </GridContainer>
    </GridContainer>
  );
};
export type { PropsType as UnitCardPropsType };
