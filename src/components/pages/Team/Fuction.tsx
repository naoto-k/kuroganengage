import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { FUCTIONS, FuctionType } from "~/constants/fuctions";
import { useTeamContext } from "~/contexts/TeamContext";

export const TeamFuction = () => {
  const { fuction, setFuction } = useTeamContext();
  const handleChange = (event: SelectChangeEvent) => {
    setFuction(
      FUCTIONS.find((f) => f.abbr === event.target.value) as FuctionType
    );
  };

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel>Fuction</InputLabel>
      <Select value={fuction.abbr} onChange={handleChange}>
        {FUCTIONS.map(({ abbr, name }) => (
          <MenuItem key={abbr} value={abbr}>
            {name} ({abbr})
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{ color: "red" }}>
        Commanders will be RESET if you change FUCTION.
      </FormHelperText>
    </FormControl>
  );
};
