import BoardIcon from "../icons/BoardIcon"
import { Button } from "../ui/button"
import DarkModeBox from "./DarkModeBox"
import HideIcon from "../icons/HideIcon"
import ShowIcon from "../icons/ShowIcon"
import useSidebar from "@/hooks/useSidebar"
import { RootState } from "@/store"
import { useSelector } from "react-redux"
import BoardsList from "../lists/BoardsList"
import BoardCard from "../cards/BoardCard"

function Sidebar() {
    const { boards } = useSelector((state: RootState) => state.board)
    const { isSidebarOpen, hideSidebar, showSidebar } = useSidebar()

  return (
    <aside className="hidden md:block">
        <div className={`sticky top-[calc(theme(height.topbar))] h-[calc(100vh-theme(height.topbar))] flex flex-col bg-white border-r border-r-light-lines py-main overflow-hidden ${!isSidebarOpen ? "w-0" : "w-[260px] lg:w-[300px]"}`}>
            <div className="px-main pb-main">
                <span className="text-medium-grey text-xs uppercase tracking-[0.25em]">all boards ({boards.length})</span>
            </div>

            <div className="grow overflow-y-auto">
                <BoardsList 
                    boards={boards}
                    renderItem={(board) => (
                        <BoardCard key={board.id} board={board} />
                    )}
                />
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