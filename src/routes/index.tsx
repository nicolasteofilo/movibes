import { Route, Routes as RouterRoutes } from "react-router-dom";

import { Home } from "../pages/Home";

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
    </RouterRoutes>
  )
}
