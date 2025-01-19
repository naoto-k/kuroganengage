import Add from "@mui/icons-material/Add";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router";

import { CloseBar } from "~/components/parts/CloseBar";
import { CompanionSpecCard } from "~/components/parts/CompanionSpecCard";
import { COMPANION_SPECS, CompanionSpecType } from "~/constants/companions";
import { useTeamContext } from "~/contexts/TeamContext";
import { calculateTeamCompanionCost } from "~/functions/calculateTeamCompanionCost";

export const Companions = () => {
  const navigate = useNavigate();
  const { addCompanion, fuction } = useTeamContext();

  const handleAdd = (companion: CompanionSpecType) => {
    addCompanion(companion);
    navigate(-1);
  };

  return (
    <div className="target-2">
      <CloseBar title="ADD COMMANDERS" />
      <Stack>
        {COMPANION_SPECS.map((companion) => (
          <CompanionSpecCard
            key={companion.name}
            companion={companion}
            cost={calculateTeamCompanionCost(companion, fuction)}
            actionNode={
              <Button variant="outlined" onClick={() => handleAdd(companion)}>
                <Add />
              </Button>
            }
          />
        ))}
      </Stack>
    </div>
  );
};
