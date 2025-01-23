import { createContext, useContext, useLayoutEffect, useState } from "react"

type DarkModeContextType = {
    isDarkMode: boolean
    toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function useDarkModeContext() {
    const context = useContext(DarkModeContext)

    if (!context) {
        throw new Error('useDarkModeContext must be used within a DarkModeProvider')
    }

    return context
}

function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    function toggleDarkMode() {
        setIsDarkMode(prev => !prev)

        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            return;
        }

        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark")
    }
    
    useLayoutEffect(() => {
        const theme = localStorage.getItem("theme")

        if (theme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
            return
        }
    }, [])

    const value: DarkModeContextType = {
        isDarkMode,
        toggleDarkMode,
    }

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider