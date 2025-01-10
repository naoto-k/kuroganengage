import { useContext, useState, ReactNode, createContext } from "react";

import { EquipmentType } from "~/components/pages/Team/Equipments";

type UnitType = {
  name: string;
  cost: number;
  avatar?: string;
  bAp: number;
  hp: number;
  arm: number;
  mv: number;
};
type CommanderType = {
  uuid: string;
} & UnitType;
type CompanionType = {
  uuid: string;
  equipments: EquipmentType[];
} & UnitType;

type TeamContextType = {
  commanders: CommanderType[];
  companions: CompanionType[];
  addCommander: (commander: UnitType) => void;
  removeCommander: (uuid: string) => void;
  addCompanion: (companion: UnitType) => void;
  removeCompanion: (uuid: string) => void;
};
const TeamContext = createContext<TeamContextType>({} as TeamContextType);
const TeamContextProvider = ({ children }: { children: ReactNode }) => {
  const [commanders, setCommanders] = useState<CommanderType[]>([]);
  const [companions, setCompanions] = useState<CompanionType[]>([]);
  const addCommander = (commander: UnitType) => {
    setCommanders([...commanders, { ...commander, uuid: crypto.randomUUID() }]);
  };
  const removeCommander = (uuid: string) => {
    setCommanders(commanders.filter((commander) => commander.uuid !== uuid));
  };
  const addCompanion = (companion: UnitType) => {
    setCompanions([
      ...companions,
      { ...companion, uuid: crypto.randomUUID(), equipments: [] },
    ]);
  };
  const removeCompanion = (uuid: string) => {
    setCompanions(companions.filter((companion) => companion.uuid !== uuid));
  };

  return (
    <TeamContext.Provider
      value={{
        commanders,
        companions,
        addCommander,
        removeCommander,
        addCompanion,
        removeCompanion,
      }}
    >
      {children}
      <pre>commanders: {JSON.stringify(commanders, null, 2)}</pre>
      <pre>companions: {JSON.stringify(companions, null, 2)}</pre>
    </TeamContext.Provider>
  );
};
const useTeamContext = () => {
  return useContext(TeamContext);
};
export { TeamContextProvider, useTeamContext };
export type { UnitType };
