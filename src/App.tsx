import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";

import { ProviderTree } from "~/contexts/ProviderTree";
import { router } from "~/router";

const theme = createTheme({
  palette: {
    background: {
      default: "rgba(246, 247, 248, 0.5)",
    },
  },
});
const App = () => (
  <StrictMode>
    <ProviderTree>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ProviderTree>
  </StrictMode>
);
export { App };
