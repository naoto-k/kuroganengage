import { useCompanionContext } from "~/components/pages/Companion/Context";
import { CompanionEquipmentList } from "~/components/pages/Companion/EquipmentList";
import { TeamCompanionCard } from "~/components/parts/TeamCompanionCard";

export const CompanionTemplate = () => {
  const { companion } = useCompanionContext();

  return (
    <>
      <TeamCompanionCard companion={companion} />
      <CompanionEquipmentList />
    </>
  );
};
