import { Add } from "@mui/icons-material";
import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import { ReactNode } from "react";

type PropsType = {
  title: string;
  children: ReactNode;
  onAdd?: () => void;
  disabled?: boolean;
  totalCost?: number;
};
export const TeamTable = ({
  title,
  children,
  onAdd = () => {},
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
          <Button
            variant="contained"
            onClick={onAdd}
            disabled={disabled}
            sx={{ p: 2 }}
          >
            <Add />
          </Button>
        </Grid2>
      </Box>
      {children}
      <Divider />
    </>
  );
};
