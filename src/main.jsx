import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DarkToggleProvider from './Context/DarkToggleContext.jsx'

createRoot(document.getElementById('root')).render(
    <DarkToggleProvider>
        <App />
    </DarkToggleProvider>
)
