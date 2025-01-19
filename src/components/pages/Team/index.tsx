import { TeamCommanders } from "~/components/pages/Team/Commanders";
import { TeamCompanions } from "~/components/pages/Team/Companions";
import { TeamFuction } from "~/components/pages/Team/Fuction";
import { TeamPoint } from "~/components/pages/Team/Point";
import { Offset } from "~/components/parts/Offset";
import { TitleBar } from "~/components/parts/TitleBar";

export const Team = () => {
  return (
    <>
      <TitleBar />
      <TeamFuction />
      <TeamCommanders />
      <TeamCompanions />
      <TeamPoint />
      <Offset />
    </>
  );
};
