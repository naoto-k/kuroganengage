import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Header from "~/components/dashboard/components/Header";
import MainGrid from "~/components/dashboard/components/MainGrid";
import SideMenu from "~/components/dashboard/components/SideMenu";

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <Box>
      <SideMenu />
      <Box component="main">
        <Stack spacing={2}>
          <Header />
          <MainGrid />
        </Stack>
      </Box>
    </Box>
  );
}
