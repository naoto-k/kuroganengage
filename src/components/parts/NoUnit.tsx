import { Typography } from "@mui/material";

import { GridContainer } from "~/components/parts/GridContainer";

export const NoUnit = () => {
  return (
    <GridContainer sx={{ justifyContent: "center", p: 2 }}>
      <Typography variant="h3">NO UNIT</Typography>
    </GridContainer>
  );
};
