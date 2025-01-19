import { Typography } from "@mui/material";
import { useContext, ReactNode, createContext } from "react";
import { useParams } from "react-router";

import { EquipmentSpecType } from "~/constants/equipments";
import { TeamCompanionType, useTeamContext } from "~/contexts/TeamContext";
import { randomUUID } from "~/functions/randomUUID";

type CompanionContextType = {
  companion: TeamCompanionType;
  addEquipment: (equipment: EquipmentSpecType) => void;
  removeEquipment: (equipment: EquipmentSpecType) => void;
};
const CompanionContext = createContext<CompanionContextType>(
  {} as CompanionContextType
);
type CompanionParamsType = {
  uuid: string;
};
const CompanionContextProvider = ({ children }: { children: ReactNode }) => {
  const { uuid } = useParams<CompanionParamsType>();
  const { companions, updateCompanion } = useTeamContext();
  const companion = companions.find((companion) => companion.uuid === uuid);
  const addEquipment = (equipment: EquipmentSpecType) => {
    if (!companion || !uuid) return;

    updateCompanion(uuid, {
      equipments: [
        ...companion.equipments,
        { ...equipment, uuid: randomUUID() },
      ],
    });
  };
  const removeEquipment = (equipment: EquipmentSpecType) => {
    if (!companion || !uuid) return;

    const index = companion.equipments.findIndex(
      (e) => e.abbr === equipment.abbr
    );
    updateCompanion(uuid, {
      equipments: companion.equipments.filter((_, i) => i !== index),
    });
  };

  if (!companion) {
    return <Typography>Not Found</Typography>;
  }

  return (
    <CompanionContext.Provider
      value={{
        companion,
        addEquipment,
        removeEquipment,
      }}
    >
      {children}
    </CompanionContext.Provider>
  );
};
const useCompanionContext = () => {
  return useContext(CompanionContext);
};
export { CompanionContextProvider, useCompanionContext };
