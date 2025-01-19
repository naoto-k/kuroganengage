import Add from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import { useNavigate } from "react-router";

import { Offset } from "~/components/parts/Offset";
import { UnitCard } from "~/components/parts/UnitCard";
import { COMMANDER_SPECS } from "~/constants/commanders";
import { useTeamContext } from "~/contexts/TeamContext";

export const CommandersTempalte = forwardRef<HTMLDivElement>((_, ref) => {
  const navigate = useNavigate();
  const { fuction, addCommander } = useTeamContext();

  return (
    <div ref={ref}>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => navigate("/", { viewTransition: true })}
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            ADD UNIT
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
      <Stack>
        {COMMANDER_SPECS[fuction.abbr].map((commander) => (
          <UnitCard
            key={commander.name}
            unit={commander}
            actionNode={
              <Button
                variant="outlined"
                onClick={() => addCommander(commander)}
              >
                <Add />
              </Button>
            }
          />
        ))}
      </Stack>
    </div>
  );
});
