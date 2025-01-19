import Add from "@mui/icons-material/Add";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import Remove from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Collapse,
  Grid2,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useCompanionContext } from "~/components/pages/Companion/Context";
import { GridContainer } from "~/components/parts/GridContainer";
import { EquipmentSpecType } from "~/constants/equipments";

const KEYS = ["name", "cost", "hit", "rng", "pow", "hdp"] as const;

type PropsType = {
  equipment: EquipmentSpecType;
  heavy?: boolean;
};
export const CompanionEquipment = ({ equipment, heavy = false }: PropsType) => {
  const [open, setOpen] = useState(false);
  const { companion, addEquipment, removeEquipment } = useCompanionContext();
  const equipments = companion.equipments || [];
  const hdp = equipments.reduce((acc, e) => acc - e.hdp, companion?.hdp || 0);
  const disabled =
    hdp < equipment.hdp ||
    (heavy && equipments.some((e) => e.abilities.includes("Heavy")));

  return (
    <Paper>
      <GridContainer spacing={1} sx={{ alignItems: "center", p: 1 }}>
        <IconButton onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>
        <Grid2 size="grow">
          <Typography>{equipment.name}</Typography>
        </Grid2>
        <Button
          variant="outlined"
          onClick={() => removeEquipment(equipment)}
          disabled={equipments.every((e) => e.abbr !== equipment.abbr)}
        >
          <Remove />
        </Button>
        <Button
          variant="outlined"
          onClick={() => addEquipment(equipment)}
          disabled={disabled}
        >
          <Add />
        </Button>
      </GridContainer>
      <Collapse in={open}>
        <Stack spacing={2}>
          <GridContainer
            sx={{
              bgcolor: "grey.500",
              p: 2,
            }}
          >
            {KEYS.map((key) => (
              <Grid2
                key={key}
                size={2}
                container
                sx={{ justifyContent: "center" }}
              >
                <Typography>{key.toUpperCase()}</Typography>
              </Grid2>
            ))}
          </GridContainer>
          <GridContainer
            sx={{
              alignItems: "center",
              p: 2,
            }}
          >
            {KEYS.map((key) => (
              <Grid2
                key={key}
                size={2}
                container
                sx={{ justifyContent: "center" }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  {equipment[key] || "N/A"}
                </Typography>
              </Grid2>
            ))}
          </GridContainer>
          {equipment.abilities.length > 0 && (
            <GridContainer
              sx={{ paddingBottom: 2, paddingLeft: 2 }}
              spacing={2}
            >
              {equipment.abilities.map((ability) => (
                <Box
                  key={ability}
                  sx={{ p: 1, border: "1px dashed grey", borderRadius: 2 }}
                >
                  {ability}
                </Box>
              ))}
            </GridContainer>
          )}
        </Stack>
      </Collapse>
    </Paper>
  );
};
