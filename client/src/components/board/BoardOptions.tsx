import useClickOutside from '@/hooks/useClickOutside'
import { useRef, useState } from 'react'
import { Button } from '../ui/button'
import VerticalElipsisIcon from '../icons/VerticalElipsisIcon'
import Popover from '../common/Popover'
import EditBoard from './EditBoard'
import DeleteBoard from './DeleteBoard'

function BoardOptions() {
    const [isBoardPopoverOpen, setIsBoardPopoverOpen] = useState(false)
    const [isEditBoardOpen, setIsEditBoardOpen] = useState(false)
    const [isDeleteBoardOpen, setIsDeleteBoardOpen] = useState(false)
    const boardPopoverRef = useRef<HTMLDivElement | null>(null)

    useClickOutside(boardPopoverRef, isBoardPopoverOpen, () => setIsBoardPopoverOpen(false))

    function showEditBoard() {
        setIsBoardPopoverOpen(false)
        setIsEditBoardOpen(true)
    }

    function showDeleteBoard() {
        setIsBoardPopoverOpen(false)
        setIsDeleteBoardOpen(true)
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
        <EditBoard isEditBoardOpen={isEditBoardOpen} setIsEditBoardOpen={setIsEditBoardOpen} />
        <DeleteBoard isDeleteBoardOpen={isDeleteBoardOpen} setIsDeleteBoardOpen={setIsDeleteBoardOpen} />
    </div>
  )
}

export default BoardOptions