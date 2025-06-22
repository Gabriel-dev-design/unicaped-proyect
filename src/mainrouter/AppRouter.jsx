import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { UnifidMedicRouter } from "../unifiedmedic/router/UnifidMedicRouter";



export const AppRouter = () => {
  return (
    <Routes>
      {/* Login and Register */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* UnicapedApp */}
      <Route path="/*" element={<UnifidMedicRouter />} />
    </Routes>
  );
};
