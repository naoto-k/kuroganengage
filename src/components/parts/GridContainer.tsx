import { Grid2, Grid2Props } from "@mui/material";

type PropsType = Omit<Grid2Props, "container">;

export const GridContainer = ({ children, ...rest }: PropsType) => (
  <Grid2 container {...rest}>
    {children}
  </Grid2>
);
