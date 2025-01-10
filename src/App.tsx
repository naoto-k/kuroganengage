import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router";

import { AppRoutes } from "~/AppRoutes";
import { ProviderTree } from "~/contexts/ProviderTree";

const theme = createTheme({
  palette: {
    background: {
      default: "rgba(246, 247, 248, 0.5)",
    },
  },
});
const App = () => (
  <ProviderTree>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </ProviderTree>
);
export { App };
