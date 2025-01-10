import { createContext, ReactNode, useState, useContext } from "react";

type UnitType = {
  name: string;
  cost: number;
  bAp: number;
  hp: number;
  arm: number;
  mv: number;
  eq: number;
};
type TeamType = {
  uuid: string;
  name: string;
  fuction: "CO" | "UC" | "TO";
  commanders: UnitType[];
  companions: UnitType[];
};
type TeamContextType = {
  teams: TeamType[];
  addTeam: (team: TeamType) => void;
  removeTeam: (uuid: string) => void;
  findTeam: (uuid: string) => TeamType | undefined;
  addCommander: (uuid: string, commander: UnitType) => void;
  removeCommander: (uuid: string, commander: UnitType) => void;
};
const TeamContext = createContext<TeamContextType>({} as TeamContextType);
export const TeamsContextProvider = ({ children }: { children: ReactNode }) => {
  const [teams, setTeams] = useState<TeamType[]>([]);
  const addTeam = (team: TeamType) => {
    setTeams([...teams, team]);
  };
  const removeTeam = (uuid: string) => {
    setTeams(teams.filter((team) => team.uuid !== uuid));
  };
  const findTeam = (uuid: string) => teams.find((team) => team.uuid === uuid);
  const addCommander = (uuid: string, commander: UnitType) => {
    setTeams(
      teams.map((team) =>
        team.uuid === uuid
          ? { ...team, commanders: [...team.commanders, commander] }
          : team
      )
    );
  };

  return (
    <TeamContext.Provider value={{ teams, addTeam, removeTeam, findTeam }}>
      {children}
    </TeamContext.Provider>
  );
};
export const useTeamsContext = () => {
  return useContext(TeamContext);
};
export type { TeamType };
