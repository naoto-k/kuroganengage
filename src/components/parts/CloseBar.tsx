import CloseIcon from "@mui/icons-material/Close";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { ScrollRestoration, useNavigate } from "react-router";

import { Offset } from "~/components/parts/Offset";

type PropsType = {
  title: string;
};
export const CloseBar = ({ title }: PropsType) => {
  const navigate = useNavigate();

  return (
    <>
      <ScrollRestoration />
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" onClick={() => navigate(-1)}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};
