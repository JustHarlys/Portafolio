import { createContext, useEffect, useState } from "react";




export const DarkContext = createContext()

export default function DarkToggleProvider({children}) {

    const [darkToggle, setDarkToggle] = useState(() => {
        return localStorage.getItem("darkToggle") === "true";
    })

    function handleToggle() {
            setDarkToggle(prevState => {
                const newState = !prevState;
                localStorage.setItem("darkToggle", newState)
                return newState;
            })
    }

    return (
        <DarkContext.Provider value={{
            handleToggle,
            darkToggle
        }}>
            {children}
        </DarkContext.Provider>
    )
}