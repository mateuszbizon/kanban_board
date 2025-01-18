import { useLayoutEffect, useState } from 'react'

function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

	function toggleDarkMode() {
		setIsDarkMode(prev => !prev);

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

  return {
    isDarkMode,
    toggleDarkMode,
  }
}

export default useDarkMode