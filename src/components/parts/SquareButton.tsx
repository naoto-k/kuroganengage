import { Button, ButtonProps, styled } from "@mui/material";
import { ElementType } from "react";

const OutlinedButton = <T extends ElementType>(props: ButtonProps<T>) => (
  <Button variant="outlined" {...props} />
);

export const SquareButton = styled(OutlinedButton)(({ theme }) => ({
  padding: theme.spacing(2),
}));
