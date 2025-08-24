import { createRoot } from 'react-dom/client'
import DarkToggleProvider from './Context/DarkToggleContext.jsx'
import DevPage from './pages/DevPage.jsx'
import {ReactLenis} from 'lenis/react'

createRoot(document.getElementById('root')).render(
    <ReactLenis root>
        <DarkToggleProvider>
            <DevPage />
        </DarkToggleProvider>
    </ReactLenis>
)
