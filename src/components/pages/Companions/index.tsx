import Add from "@mui/icons-material/Add";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router";

import { CloseBar } from "~/components/parts/CloseBar";
import { CompanionSpecCard } from "~/components/parts/CompanionSpecCard";
import { COMPANION_SPECS, CompanionSpecType } from "~/constants/companions";
import { THE_ORDER_ADDITIONAL_COST_PER_UNIT } from "~/constants/fuctions";
import { useTeamContext } from "~/contexts/TeamContext";

export const Companions = () => {
  const navigate = useNavigate();
  const { addCompanion, fuction } = useTeamContext();

  const handleAdd = (companion: CompanionSpecType) => {
    addCompanion(companion);
    navigate(-1);
  };
  const additionalCost =
    fuction.abbr === "TO" ? THE_ORDER_ADDITIONAL_COST_PER_UNIT : 0;

  return (
    <div className="target-2">
      <CloseBar title="ADD COMMANDERS" />
      <Stack>
        {COMPANION_SPECS.map((companion) => (
          <CompanionSpecCard
            key={companion.name}
            companion={companion}
            cost={companion.cost + additionalCost}
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
