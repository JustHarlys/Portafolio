import { createContext } from "react";
import { useState } from "react";

export const RouteContext = createContext();

export default function RouteProvider({ children }) {

    const [ mode, setMode ] = useState(false);

    const onToggleMode = () => {
        setMode(prevMode => !prevMode);
    }

return (

    <RouteContext.Provider value={{ mode, onToggleMode }}>
    {children}
    </RouteContext.Provider>
    
)
}