import { createRoot } from 'react-dom/client'
import DarkToggleProvider from './Context/DarkToggleContext.jsx'
import DevPage from './pages/DevPage.jsx'

createRoot(document.getElementById('root')).render(
    <DarkToggleProvider>
        <DevPage />
    </DarkToggleProvider>

)
