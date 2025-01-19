import { Paper, Stack, Typography, styled } from "@mui/material";

import { CompanionEquipment } from "~/components/pages/Companion/Equipment";
import { EQUIPMENTS, HEAVY_EQUIPMENTS } from "~/constants/equipments";

const Title = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.common.white,
}));
export const CompanionEquipmentList = () => {
  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Title>
        <Typography>WARGEAR OPTIONS</Typography>
      </Title>

      {EQUIPMENTS.map((equipment) => (
        <CompanionEquipment key={equipment.abbr} equipment={equipment} />
      ))}
      <Title>
        <Typography>HEAVY WARGEAR OPTIONS</Typography>
      </Title>

      {HEAVY_EQUIPMENTS.map((equipment) => (
        <CompanionEquipment key={equipment.abbr} equipment={equipment} heavy />
      ))}
    </Stack>
  );
};
