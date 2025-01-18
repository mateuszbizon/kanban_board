import { AppDispatch, RootState } from '@/store';
import { setDarkMode } from '@/store/slices/darkModeSlice';
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function useDarkMode() {
    const { isDarkMode } = useSelector((state: RootState) => state.darkMode)
    const dispatch = useDispatch<AppDispatch>()

	function toggleDarkMode() {
		dispatch(setDarkMode(!isDarkMode))

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
            dispatch(setDarkMode(true))
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