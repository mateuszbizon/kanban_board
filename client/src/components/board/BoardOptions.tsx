import useClickOutside from '@/hooks/useClickOutside'
import { useRef, useState } from 'react'
import { Button } from '../ui/button'
import VerticalElipsisIcon from '../icons/VerticalElipsisIcon'
import Popover from '../common/Popover'

function BoardOptions() {
    const [isBoardPopoverOpen, setIsBoardPopoverOpen] = useState(false)
    const boardPopoverRef = useRef<HTMLDivElement | null>(null)

    useClickOutside(boardPopoverRef, isBoardPopoverOpen, () => setIsBoardPopoverOpen(false))

    function showEditBoard() {
        setIsBoardPopoverOpen(false)
    }

    function showDeleteBoard() {
        setIsBoardPopoverOpen(false)
    }

  return (
    <div ref={boardPopoverRef} className="relative">
        <Button variant={"transparent"} className="pr-0" onClick={() => setIsBoardPopoverOpen(prev => !prev)}>
            <VerticalElipsisIcon />
        </Button>
        <Popover 
            isOpen={isBoardPopoverOpen} 
            top="130%"
            right="5px"
        >
            <div className="space-y-5 text-2xs">
                <Button variant={"transparent"} className="p-0 text-medium-grey" onClick={showEditBoard}>Edit Board</Button>
                <Button variant={"transparent"} className="p-0 text-red" onClick={showDeleteBoard}>Delete Board</Button>
            </div>
        </Popover>
    </div>
  )
}

export default BoardOptions