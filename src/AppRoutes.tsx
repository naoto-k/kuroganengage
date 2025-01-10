import { Route, Routes } from "react-router";

import { AppBarWithTitle } from "~/components/layouts/AppBarWithTitle";
import { Companion } from "~/components/pages/Companion";
import { Team } from "~/components/pages/Team";

const AppRoutes = () => (
  <Routes>
    <Route element={<AppBarWithTitle />}>
      <Route index element={<Team />} />
      <Route path="companions/:uuid" element={<Companion />} />
    </Route>
  </Routes>
);
export { AppRoutes };
