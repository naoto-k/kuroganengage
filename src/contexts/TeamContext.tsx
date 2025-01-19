import {
  useContext,
  useState,
  ReactNode,
  createContext,
  useEffect,
} from "react";

import { CommanderSpecType } from "~/constants/commanders";
import { CompanionSpecType } from "~/constants/companions";
import { EquipmentSpecType } from "~/constants/equipments";
import { FUCTIONS, FuctionType } from "~/constants/fuctions";
import { getItemFromLocalStorage } from "~/functions/getItemFromLocalStorage";
import { randomUUID } from "~/functions/randomUUID";
import { setItemToLocalStorage } from "~/functions/setItemToLocalStorage";

type UnitSpecType = {
  name: string;
  cost: number;
  avatar?: string;
  bAp: number;
  hp: number;
  arm: number;
  mv: number;
};

type UnitEquipmentType = {
  uuid: string;
} & EquipmentSpecType;

type TeamCommanderType = {
  uuid: string;
} & CommanderSpecType;

type TeamCompanionType = {
  uuid: string;
  equipments: UnitEquipmentType[];
} & CompanionSpecType;

type TeamContextType = {
  fuction: FuctionType;
  setFuction: (fuction: FuctionType) => void;

  commanders: TeamCommanderType[];
  addCommander: (commander: CommanderSpecType) => void;
  removeCommander: (name: string) => void;

  companions: TeamCompanionType[];
  addCompanion: (companion: CompanionSpecType) => void;
  removeCompanion: (uuid: string) => void;
  updateCompanion: (
    uuid: string,
    companion: Partial<TeamCompanionType>
  ) => void;
};
const LOCAL_STORAGE_COMMANDERS_KEY = "commanders";
const LOCAL_STORAGE_COMPANIONS_KEY = "companions";
const LOCAL_STORAGE_FUCTION_KEY = "fuction";
const TeamContext = createContext<TeamContextType>({} as TeamContextType);
const TeamContextProvider = ({ children }: { children: ReactNode }) => {
  const [fuction, _setFuction] = useState<FuctionType>(() => {
    return getItemFromLocalStorage(LOCAL_STORAGE_FUCTION_KEY) || FUCTIONS[0];
  });
  const setFuction = (fuction: FuctionType) => {
    _setFuction(fuction);
    setCommanders([]);
  };
  const [commanders, setCommanders] = useState<TeamCommanderType[]>(() => {
    return getItemFromLocalStorage(LOCAL_STORAGE_COMMANDERS_KEY) || [];
  });
  const [companions, setCompanions] = useState<TeamCompanionType[]>(() => {
    return getItemFromLocalStorage(LOCAL_STORAGE_COMPANIONS_KEY) || [];
  });
  const addCommander = (commander: CommanderSpecType) => {
    setCommanders([...commanders, { ...commander, uuid: randomUUID() }]);
  };
  const removeCommander = (name: string) => {
    setCommanders(commanders.filter((commander) => commander.name !== name));
  };
  const addCompanion = (companion: CompanionSpecType) => {
    setCompanions([
      ...companions,
      { ...companion, uuid: randomUUID(), equipments: [] },
    ]);
  };
  const removeCompanion = (uuid: string) => {
    setCompanions(companions.filter((companion) => companion.uuid !== uuid));
  };
  const updateCompanion = (
    uuid: string,
    companion: Partial<TeamCompanionType>
  ) => {
    setCompanions(
      companions.map((c) => (c.uuid === uuid ? { ...c, ...companion } : c))
    );
  };

  useEffect(() => {
    setItemToLocalStorage(LOCAL_STORAGE_COMMANDERS_KEY, commanders);
  }, [commanders]);

  useEffect(() => {
    setItemToLocalStorage(LOCAL_STORAGE_COMPANIONS_KEY, companions);
  }, [companions]);

  return (
    <TeamContext.Provider
      value={{
        fuction,
        commanders,
        companions,
        setFuction,
        addCommander,
        removeCommander,
        addCompanion,
        removeCompanion,
        updateCompanion,
      }}
    >
      {children}
      <pre>{JSON.stringify(commanders, null, 2)}</pre>
      <pre>{JSON.stringify(companions, null, 2)}</pre>
    </TeamContext.Provider>
  );
};
const useTeamContext = () => {
  return useContext(TeamContext);
};
export { TeamContextProvider, useTeamContext };
export type {
  UnitSpecType,
  TeamCompanionType,
  TeamCommanderType,
  UnitEquipmentType,
};
