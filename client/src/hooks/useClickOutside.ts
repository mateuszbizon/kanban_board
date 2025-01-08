import { useEffect } from "react"

function useClickOutside<T extends HTMLElement>(container: React.MutableRefObject<T | null>, isOpen: boolean, onClose: () => void) {
    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (e: MouseEvent) => {
            if (!container.current?.contains(e.target as Node)) {
                onClose()
            }
        }

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [isOpen])
}

export default useClickOutside