import { TeamCommanders } from "~/components/pages/Team/Commanders";
import { TeamCompanions } from "~/components/pages/Team/Companions";
import { TeamPoint } from "~/components/pages/Team/Point";

export const Team = () => {
  return (
    <>
      <TeamCommanders />
      <TeamCompanions />
      <TeamPoint />
    </>
  );
};
