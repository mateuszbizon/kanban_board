import BoardIcon from "../icons/BoardIcon"
import LogoDarkIcon from "../icons/LogoDarkIcon"
import LogoLightIcon from "../icons/LogoLightIcon"
import { Button } from "../ui/button"
import DarkModeBox from "./DarkModeBox"

function Sidebar() {
  return (
    <aside className="hidden md:block">
        <div className="sticky top-0 flex items-center bg-white h-topbar p-main border-r border-r-light-lines">
            <LogoDarkIcon />
        </div>
        <div className="sticky top-[calc(theme(height.topbar))] flex flex-col w-[260px] h-[calc(100vh-theme(height.topbar))] bg-white border-r border-r-light-lines">
            <div className="p-main">
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
        </div>
    </aside>
  )
}

export default Sidebar