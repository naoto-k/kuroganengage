import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { deepOrange } from "@mui/material/colors";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ScrollRestoration } from "react-router";

import { Offset } from "~/components/parts/Offset";

export const TitleBar = () => {
  return (
    <Box>
      <ScrollRestoration />
      <AppBar>
        <Toolbar>
          <Avatar variant="rounded" sx={{ mr: 1, bgcolor: deepOrange[500] }}>
            kNg
          </Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KurogaNenGage
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
};
