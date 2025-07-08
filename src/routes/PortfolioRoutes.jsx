import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import DevRoute from "./DevRoute"
import { useContext, useEffect } from "react"
import { RouteContext } from "../Context/RouteContext"
import { FreelanceRoute } from "./FreelanceRoute"

export const PortfolioRoutes = () => {

    const { mode } = useContext(RouteContext)
    const navigate = useNavigate();

    useEffect(() => {
        navigate(mode ? '/freelance' : '/dev');
    }, [mode, navigate])

  return (
    <Routes>
    <Route path="/dev" element={<DevRoute />} />
    <Route path="/freelance" element={<FreelanceRoute />} />
    <Route
        path="/"
        element={<Navigate to="/dev" />}
    />
    </Routes>
  )
}
