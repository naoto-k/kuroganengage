import Add from "@mui/icons-material/Add";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router";

import { CloseBar } from "~/components/parts/CloseBar";
import { CommanderCard } from "~/components/parts/CommanderCard";
import { COMMANDER_SPECS, CommanderSpecType } from "~/constants/commanders";
import { useTeamContext } from "~/contexts/TeamContext";

export const Commanders = () => {
  const navigate = useNavigate();
  const { fuction, addCommander, commanders } = useTeamContext();

  const handleAdd = (commander: CommanderSpecType) => {
    addCommander(commander);
    navigate(-1);
  };

  return (
    <div className="target-1">
      <CloseBar title="ADD COMMANDERS" />
      <Stack>
        {COMMANDER_SPECS[fuction.abbr]
          .filter((c) => commanders.every((tc) => tc.name != c.name))
          .map((commander) => (
            <CommanderCard
              key={commander.name}
              commander={commander}
              actionNode={
                <Button variant="outlined" onClick={() => handleAdd(commander)}>
                  <Add />
                </Button>
              }
            />
          ))}
      </Stack>
    </div>
  );
};
