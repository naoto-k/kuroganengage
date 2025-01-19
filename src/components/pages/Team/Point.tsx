import Check from "@mui/icons-material/Check";
import Warning from "@mui/icons-material/Warning";
import { Paper, Typography } from "@mui/material";

import { GridContainer } from "~/components/parts/GridContainer";
import { THE_ORDER_ADDITIONAL_COST_PER_UNIT } from "~/constants/fuctions";
import { useTeamContext } from "~/contexts/TeamContext";

const MAX_COST = 500;

export const TeamPoint = () => {
  const { fuction, commanders, companions } = useTeamContext();
  const totalCost =
    commanders.reduce((total, { cost }) => total + cost, 0) +
    companions.reduce(
      (total, { cost, equipments }) =>
        total +
        cost +
        (fuction.abbr === "TO" ? THE_ORDER_ADDITIONAL_COST_PER_UNIT : 0) +
        equipments.reduce((eTotal, e) => eTotal + e.cost, 0),

      0
    );
  return (
    <Paper sx={{ position: "fixed", bottom: 10, left: 10 }}>
      <GridContainer>
        {totalCost <= MAX_COST ? (
          <GridContainer
            sx={{ bgcolor: "success.light", p: 2, color: "common.white" }}
          >
            <Check />
          </GridContainer>
        ) : (
          <GridContainer sx={{ bgcolor: "warning.light", p: 2 }}>
            <Warning />
          </GridContainer>
        )}
        <GridContainer
          spacing={1}
          sx={{
            bgcolor: "primary.light",
            p: 2,
            color: "common.white",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">
            {totalCost} / {MAX_COST}
          </Typography>
          <Typography variant="subtitle2">POINTS</Typography>
        </GridContainer>
      </GridContainer>
    </Paper>
  );
};
