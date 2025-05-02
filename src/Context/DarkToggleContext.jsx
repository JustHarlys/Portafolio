import { createContext, useState } from "react";




export const DarkContext = createContext()

export default function DarkToggleProvider({children}) {

    const [darkToggle, setDarkToggle] = useState(false)

    function handleToggle() {
        setDarkToggle(prevState => !prevState)
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