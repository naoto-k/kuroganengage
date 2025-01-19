import { Delete } from "@mui/icons-material";

import { TeamTable } from "~/components/pages/Team/Table";
import { CommanderCard } from "~/components/parts/CommanderCard";
import { NoUnit } from "~/components/parts/NoUnit";
import { SquareButton } from "~/components/parts/SquareButton";
import { useTeamContext } from "~/contexts/TeamContext";

export const TeamCommanders = () => {
  const { commanders, removeCommander } = useTeamContext();

  return (
    <div className="target-1">
      <TeamTable
        title="COMMANDERS"
        to="/commanders"
        disabled={commanders.length >= 2}
        totalCost={commanders.reduce(
          (acc, commander) => acc + commander.cost,
          0
        )}
      >
        {commanders.length == 0 && <NoUnit />}
        {commanders.map((commander) => (
          <CommanderCard
            key={commander.name}
            commander={commander}
            actionNode={
              <SquareButton
                color="error"
                onClick={() => removeCommander(commander.name)}
              >
                <Delete />
              </SquareButton>
            }
          />
        ))}
      </TeamTable>
    </div>
  );
};
