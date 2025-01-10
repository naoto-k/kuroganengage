import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <Typography component="h2" variant="h6">
          Home
        </Typography>
        <Grid2 spacing={2} columns={12}>
          <Grid2 columns={6}>
            <Button component={NavLink} to="/rosters">
              Rosters
            </Button>
            <Button component={NavLink} to="/dashboard">
              Dashboard
            </Button>
          </Grid2>
        </Grid2>
      </Stack>
    </Box>
  );
};

export { Home };
