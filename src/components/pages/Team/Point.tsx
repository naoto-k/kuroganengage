import Check from "@mui/icons-material/Check";
import Warning from "@mui/icons-material/Warning";
import { Grid2, Paper, Typography } from "@mui/material";

import { useTeamContext } from "~/contexts/TeamContext";

const MAX_COST = 500;
export const TeamPoint = () => {
  const { commanders, companions } = useTeamContext();
  const totalCost =
    commanders.reduce((acc, { cost }) => acc + cost, 0) +
    companions.reduce((acc, { cost }) => acc + cost, 0);
  return (
    <Paper sx={{ position: "fixed", bottom: 10, left: 10 }}>
      <Grid2 container>
        {totalCost <= MAX_COST ? (
          <Grid2
            container
            sx={{ bgcolor: "success.light", p: 2, color: "common.white" }}
          >
            <Check />
          </Grid2>
        ) : (
          <Grid2 container sx={{ bgcolor: "warning.light", p: 2 }}>
            <Warning />
          </Grid2>
        )}
        <Grid2
          container
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
        </Grid2>
      </Grid2>
    </Paper>
  );
};
