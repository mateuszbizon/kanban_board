import { useSelector } from "react-redux"
import AddIcon from "../icons/AddIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import LogoDarkIcon from "../icons/LogoDarkIcon"
import LogoIcon from "../icons/LogoIcon"
import VerticalElipsisIcon from "../icons/VerticalElipsisIcon"
import { Button } from "../ui/button"
import { RootState } from "@/store"

function Topbar() {
    const { isOpen: isSidebarOpen } = useSelector((state: RootState) => state.sidebar)

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
                <Button disabled>
                    <div className="md:hidden">
                        <AddIcon />
                    </div>
                    <span className="hidden md:block">+ Add New Task</span>
                </Button>
                <Button variant={"transparent"} className="pr-0">
                    <VerticalElipsisIcon />
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Topbar