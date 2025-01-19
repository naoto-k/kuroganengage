import Add from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef } from "react";

import { Offset } from "~/components/parts/Offset";
import { UnitCard } from "~/components/parts/UnitCard";
import { UnitType } from "~/contexts/TeamContext";

const SlideUp = forwardRef(
  (
    props: TransitionProps & {
      children: ReactElement;
    },
    ref: Ref<unknown>
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);
type PropsType<T extends UnitType> = {
  open: boolean;
  units: T[];
  onAdd: (unit: T) => void;
  onClose: () => void;
};
export const TeamDialog = <T extends UnitType>({
  open,
  units,
  onAdd,
  onClose,
}: PropsType<T>) => {
  const handleAdd = (unit: T) => {
    onAdd(unit);
  };

  return (
    <Dialog
      open={open}
      fullScreen
      TransitionComponent={SlideUp}
      keepMounted
      onClose={onClose}
    >
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" onClick={() => onClose()}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            ADD UNIT
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
      <DialogContent sx={{ p: 0 }}>
        <Stack>
          {units.map((unit) => (
            <UnitCard
              key={unit.name}
              unit={unit}
              actionNode={
                <Button variant="outlined" onClick={() => handleAdd(unit)}>
                  <Add />
                </Button>
              }
            />
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
