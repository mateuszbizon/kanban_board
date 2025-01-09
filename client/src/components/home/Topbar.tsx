import { useSelector } from "react-redux"
import AddIcon from "../icons/AddIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import LogoDarkIcon from "../icons/LogoDarkIcon"
import LogoIcon from "../icons/LogoIcon"
import { Button } from "../ui/button"
import { RootState } from "@/store"
import BoardOptions from "../board/BoardOptions"

function Topbar() {
    const { isOpen: isSidebarOpen } = useSelector((state: RootState) => state.sidebar)
    const { boards, currentBoard } = useSelector((state: RootState) => state.board)

  return (
    <div className="flex sticky top-0">
        <div className={`hidden md:flex items-center bg-white h-topbar p-main border-r border-r-light-lines ${isSidebarOpen ? "w-[260px] md:w-[300px]" : "w-auto"}`}>
            <LogoDarkIcon />
        </div>
        <div className="flex justify-between items-center grow bg-white h-topbar p-main">
            <div className="flex items-center gap-2">
                <div className="md:hidden">
                    <LogoIcon />
                </div>
                <Button variant={"transparent"} className="text-black text-lg p-0 md:hidden">
                    Platform Launch
                    <ChevronDownIcon />
                </Button>
                <span className="text-black text-lg hidden md:block">Platform Launch</span>
            </div>

            <div className="flex items-center">
                <Button disabled={!currentBoard?.columns.length || !boards.length}>
                    <div className="md:hidden">
                        <AddIcon />
                    </div>
                    <span className="hidden md:block">+ Add New Task</span>
                </Button>
                <BoardOptions />
            </div>
        </div>
    </div>
  )
}

export default Topbar