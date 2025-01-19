import { Delete } from "@mui/icons-material";
import Settings from "@mui/icons-material/Settings";
import { Typography } from "@mui/material";
import { Link } from "react-router";

import { TeamTable } from "~/components/pages/Team/Table";
import { GridContainer } from "~/components/parts/GridContainer";
import { SquareButton } from "~/components/parts/SquareButton";
import { TeamCompanionCard } from "~/components/parts/TeamCompanionCard";
import { useTeamContext } from "~/contexts/TeamContext";

export const TeamCompanions = () => {
  const { companions, removeCompanion } = useTeamContext();

  return (
    <div className="target-2">
      <TeamTable
        title="COMPANIONS"
        to="/companions"
        totalCost={companions.reduce(
          (acc, companion) => acc + companion.cost,
          0
        )}
      >
        {companions.length == 0 && (
          <GridContainer sx={{ justifyContent: "center", p: 2 }}>
            <Typography variant="h3">NO UNIT</Typography>
          </GridContainer>
        )}
        {companions.map((companion) => (
          <TeamCompanionCard
            key={`${companion.uuid}`}
            companion={companion}
            actionNode={
              <GridContainer spacing={1}>
                <SquareButton
                  component={Link}
                  to={`/companions/${companion.uuid}`}
                  viewTransition
                >
                  <Settings />
                </SquareButton>
                <SquareButton
                  color="error"
                  onClick={() => removeCompanion(companion.uuid)}
                >
                  <Delete />
                </SquareButton>
              </GridContainer>
            }
          />
        ))}
      </TeamTable>
    </div>
  );
};
