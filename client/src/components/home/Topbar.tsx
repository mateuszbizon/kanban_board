import AddIcon from "../icons/AddIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import LogoIcon from "../icons/LogoIcon"
import VerticalElipsisIcon from "../icons/VerticalElipsisIcon"
import { Button } from "../ui/button"

function Topbar() {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-white h-topbar p-main">
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
  )
}

export default Topbar