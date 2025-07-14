import { Routes, Route, Navigate} from "react-router-dom";
import DevPage from "../pages/DevPage";
import { useContext } from "react";
import { RouteContext } from "../Context/RouteContext";
import { FreelancerPage } from "../pages/FreelancerPage";

export const PortfolioRoutes = () => {
  const { mode } = useContext(RouteContext);

  return (
    <Routes>
      <Route path="/dev" element={<DevPage />} />
      <Route path="/freelance" element={<FreelancerPage />} />
      <Route path="/" element={<Navigate to={mode ? "/freelance" : "/dev"} replace />} />
    </Routes>
  );
}
