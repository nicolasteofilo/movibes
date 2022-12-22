import { Route, Routes as RouterRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Films } from "../pages/Films";

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Films />} />
    </RouterRoutes>
  )
}
