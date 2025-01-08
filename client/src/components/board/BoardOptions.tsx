import useClickOutside from '@/hooks/useClickOutside'
import { useRef, useState } from 'react'
import { Button } from '../ui/button'
import VerticalElipsisIcon from '../icons/VerticalElipsisIcon'
import Popover from '../common/Popover'
import Modal from '../common/Modal'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import BoardForm from '../forms/BoardForm'

function BoardOptions() {
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const [isBoardPopoverOpen, setIsBoardPopoverOpen] = useState(false)
    const [isEditBoardOpen, setIsEditBoardOpen] = useState(false)
    const boardPopoverRef = useRef<HTMLDivElement | null>(null)

    useClickOutside(boardPopoverRef, isBoardPopoverOpen, () => setIsBoardPopoverOpen(false))

    function showEditBoard() {
        setIsBoardPopoverOpen(false)
        setIsEditBoardOpen(true)
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
        <Modal isOpen={isEditBoardOpen} onClose={() => setIsEditBoardOpen(false)} isModalDelete={false}>
            <BoardForm board={currentBoard} />
        </Modal>
    </div>
  )
}

export default BoardOptions