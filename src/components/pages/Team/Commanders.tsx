import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";

import { TeamDialog } from "~/components/pages/Team/Dialog";
import { TeamTable } from "~/components/pages/Team/Table";
import { UnitCard } from "~/components/parts/UnitCard";
import { CO_COMMANDERS } from "~/constants/CO/commanders";
import { UnitType, useTeamContext } from "~/contexts/TeamContext";

export const TeamCommanders = () => {
  const { commanders, addCommander, removeCommander } = useTeamContext();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleAdd = (commander: UnitType) => {
    addCommander(commander);
    handleClose();
  };

  return (
    <>
      <TeamTable
        title="COMMANDERS"
        onAdd={handleOpen}
        disabled={commanders.length >= 2}
        totalCost={commanders.reduce(
          (acc, commander) => acc + commander.cost,
          0
        )}
      >
        {commanders.map((commander) => (
          <UnitCard
            key={commander.uuid}
            unit={commander}
            actionNode={
              <Button
                variant="outlined"
                color="error"
                sx={{ p: 1 }}
                onClick={() => removeCommander(commander.uuid)}
              >
                <Delete />
              </Button>
            }
          />
        ))}
      </TeamTable>
      <TeamDialog
        open={open}
        units={CO_COMMANDERS.filter(
          (unit) => !commanders.some((c) => c.name === unit.name)
        )}
        onAdd={handleAdd}
        onClose={handleClose}
      />
    </>
  );
};
