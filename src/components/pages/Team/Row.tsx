import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { UnitType } from "~/components/pages/Team/Context";

export const TeamRow = ({
  row: { name, cost, bAp, hp, arm, mv, eq },
}: {
  row: UnitType;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={() => setOpen(!open)}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell>{cost}</TableCell>
        <TableCell>{bAp}</TableCell>
        <TableCell>{hp}</TableCell>
        <TableCell>{arm}</TableCell>
        <TableCell>{mv}</TableCell>
        <TableCell>{eq}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Equipments
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Cost</TableCell>
                    <TableCell>Hit</TableCell>
                    <TableCell>Rng</TableCell>
                    <TableCell>Pow</TableCell>
                    <TableCell>EQ</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {equipments.map((equipment) => (
                    <TableRow key={equipment.name}>
                      <TableCell component="th" scope="row">
                        {equipment.name}
                      </TableCell>
                      <TableCell>{equipment.cost}</TableCell>
                      <TableCell>{equipment.hit}</TableCell>
                      <TableCell>{equipment.rng}</TableCell>
                      <TableCell>{equipment.pow}</TableCell>
                      <TableCell>{equipment.eq}</TableCell>
                      <TableCell>{equipment.abilities.join(", ")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
