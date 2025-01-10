import { Delete } from "@mui/icons-material";
import Settings from "@mui/icons-material/Settings";
import { Button, Grid2 } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";

import { TeamDialog } from "~/components/pages/Team/Dialog";
import { TeamTable } from "~/components/pages/Team/Table";
import { UnitCard } from "~/components/parts/UnitCard";
import { COMPANIONS } from "~/constants/conpanions";
import { UnitType, useTeamContext } from "~/contexts/TeamContext";

export const TeamCompanions = () => {
  const { companions, addCompanion, removeCompanion } = useTeamContext();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleAdd = (companion: UnitType) => {
    addCompanion(companion);
    handleClose();
  };

  return (
    <>
      <TeamTable
        title="COMPANIONS"
        onAdd={handleOpen}
        totalCost={companions.reduce(
          (acc, companion) => acc + companion.cost,
          0
        )}
      >
        {companions.map((companion) => (
          <UnitCard
            key={companion.uuid}
            unit={companion}
            actionNode={
              <Grid2 container>
                <Button
                  variant="outlined"
                  sx={{ p: 1 }}
                  component={Link}
                  to={`/companions/${companion.uuid}`}
                  viewTransition
                >
                  <Settings />
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ p: 1 }}
                  onClick={() => removeCompanion(companion.uuid)}
                >
                  <Delete />
                </Button>
              </Grid2>
            }
          />
        ))}
      </TeamTable>
      <TeamDialog
        open={open}
        units={COMPANIONS}
        onAdd={handleAdd}
        onClose={handleClose}
      />
    </>
  );
};
