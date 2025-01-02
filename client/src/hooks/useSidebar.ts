import { useState } from 'react'

function useSidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    function hideSidebar() {
        setIsSidebarOpen(false)
    }

    function showSidebar() {
        setIsSidebarOpen(true)
    }

  return {
    isSidebarOpen,
    hideSidebar,
    showSidebar,
  }
}

export default useSidebar