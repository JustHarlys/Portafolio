import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import DarkToggleProvider from './Context/DarkToggleContext.jsx'
import RouteProvider from './Context/RouteContext.jsx'
import { PortfolioRoutes } from './routes/PortfolioRoutes.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DarkToggleProvider>
            <RouteProvider>
                <PortfolioRoutes />
            </RouteProvider>
        </DarkToggleProvider>
    </BrowserRouter>
)
