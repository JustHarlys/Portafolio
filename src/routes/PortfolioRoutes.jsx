import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import DevPage from "../pages/DevPage"
import { useContext, useEffect } from "react"
import { RouteContext } from "../Context/RouteContext"
import { FreelancerPage } from "../pages/FreelancerPage"

export const PortfolioRoutes = () => {

    const { mode } = useContext(RouteContext)
    const navigate = useNavigate();

    useEffect(() => {
        navigate(mode ? '/freelance' : '/dev');
    }, [mode, navigate])

  return (
    <Routes>
    <Route path="/dev" element={<DevPage />} />
    <Route path="/freelance" element={<FreelancerPage />} />
    <Route
        path="/"
        element={<Navigate to="/dev" />}
    />
    </Routes>
  )
}
