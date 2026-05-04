import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "../data/theme";

const ThemeContext = createContext()

export function Theme({ children }) {
    const [dark, setDark] = useState(false)
    
    useEffect(() => {
        document.body.classList.toggle("dark", dark)
    }, [dark])
    
    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}