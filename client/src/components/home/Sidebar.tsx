import { useState } from "react"
import BoardIcon from "../icons/BoardIcon"
import LogoDarkIcon from "../icons/LogoDarkIcon"
import LogoLightIcon from "../icons/LogoLightIcon"
import { Button } from "../ui/button"
import DarkModeBox from "./DarkModeBox"
import HideIcon from "../icons/HideIcon"
import ShowIcon from "../icons/ShowIcon"

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    function hideSidebar() {
        setIsSidebarOpen(false)
    }

    function showSidebar() {
        setIsSidebarOpen(true)
    }

  return (
    <aside className="hidden md:block">
        <div className="sticky top-0 flex items-center bg-white h-topbar p-main border-r border-r-light-lines">
            <LogoDarkIcon />
        </div>
        <div className={`sticky top-[calc(theme(height.topbar))] flex flex-col bg-white border-r border-r-light-lines py-main overflow-hidden ${!isSidebarOpen ? "w-0 h-0" : "w-[260px] lg:w-[300px] h-[calc(100vh-theme(height.topbar))]"}`}>
            <div className="px-main pb-main">
                <span className="text-medium-grey text-xs uppercase tracking-[0.25em]">all boards (3)</span>
            </div>

            <div className="grow overflow-y-auto">
                <div className="pr-main">
                    <Button variant={"sidebar-active"} size={"sidebar"} className="w-full">
                        <BoardIcon /> Platform Launch
                    </Button>
                </div>
                <div className="pr-main">
                    <Button variant={"sidebar"} size={"sidebar"} className="w-full">
                        <BoardIcon /> Marketing Plan
                    </Button>
                </div>
                <div className="pr-main">
                    <Button variant={"sidebar"} size={"sidebar"} className="w-full text-main-purple">
                        <BoardIcon /> + Create Board
                    </Button>
                </div>
            </div>

            <div className="mt-auto">
                <DarkModeBox />
            </div>
            <div className="pr-main">
                <Button variant={"sidebar"} size={"sidebar"} className="w-full" onClick={hideSidebar}>
                    <HideIcon /> Hide Sidebar
                </Button>
            </div>
        </div>
        {!isSidebarOpen && (
            <Button size={"icon"} className="fixed bottom-10 left-0 rounded-r-3xl rounded-l-none pr-5 hidden md:block" onClick={showSidebar}>
                <ShowIcon />
            </Button>
        )}
    </aside>
  )
}

export default Sidebar