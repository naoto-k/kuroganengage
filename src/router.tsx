import { createBrowserRouter } from "react-router";

import { Commanders } from "~/components/pages/Commanders";
import { Companion } from "~/components/pages/Companion";
import { Companions } from "~/components/pages/Companions";
import { Team } from "~/components/pages/Team";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Team />,
  },
  {
    path: "commanders",
    element: <Commanders />,
  },
  {
    path: "companions",
    element: <Companions />,
  },
  {
    path: "companions/:uuid",
    element: <Companion />,
  },
]);
