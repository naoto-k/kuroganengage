import { Add } from "@mui/icons-material";
import { Box, Divider, Grid2, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router";

import { SquareButton } from "~/components/parts/SquareButton";

type PropsType = {
  title: string;
  children: ReactNode;
  to: string;
  disabled?: boolean;
  totalCost?: number;
};
export const TeamTable = ({
  title,
  children,
  to,
  disabled = false,
  totalCost = 0,
}: PropsType) => {
  return (
    <>
      <Box sx={{ bgcolor: "primary.dark", color: "white" }}>
        <Grid2
          container
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Grid2 container size="grow" justifyContent="flex-end">
            <Typography variant="subtitle2">{totalCost} Points </Typography>
          </Grid2>
          <SquareButton
            variant="contained"
            disabled={disabled}
            component={Link}
            to={to}
            viewTransition
          >
            <Add />
          </SquareButton>
        </Grid2>
      </Box>
      {children}
      <Divider />
    </>
  );
};
