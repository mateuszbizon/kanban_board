import { useRef, useState } from 'react'
import { Button } from '../ui/button'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import Popover from '../common/Popover'
import useClickOutside from '@/hooks/useClickOutside'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import BoardsList from '../lists/BoardsList'
import BoardCard from '../cards/BoardCard'
import BoardIcon from '../icons/BoardIcon'
import Modal from '../common/Modal'
import BoardForm from '../forms/BoardForm'
import DarkModeBox from './DarkModeBox'

function TopbarOptions() {
    const { currentBoard, boards } = useSelector((state: RootState) => state.board)
    const [isTopbarOptionsOpen, setIsTopbarOptionsOpen] = useState(false)
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false)
    const topbarOptionsRef = useRef<HTMLDivElement>(null)

    useClickOutside(topbarOptionsRef, isTopbarOptionsOpen, () => setIsTopbarOptionsOpen(false))

    function handleOpenBoardModal() {
        setIsBoardModalOpen(true)
        setIsTopbarOptionsOpen(false)
    }

  return (
    <div ref={topbarOptionsRef}>
        <Button 
            variant={"transparent"} 
            className="text-black text-lg p-0 md:hidden" 
            onClick={() => setIsTopbarOptionsOpen(prev => !prev)}
        >
            {currentBoard?.name}
            <div className={`${isTopbarOptionsOpen ? "rotate-180" : "rotate-0"} transition-transform`}>
                <ChevronDownIcon />
            </div>
        </Button>
        <Popover top="100px" left="50%" isOpen={isTopbarOptionsOpen} centerX className="!p-0 w-[260px]">
            <div className='space-y-5 py-main'>
                <span className='px-main text-medium-grey uppercase text-xs tracking-[0.25em]'>all boards ({boards.length})</span>
                <div>
                    <BoardsList 
                        boards={boards}
                        renderItem={(board) => (
                            <BoardCard key={board.id} board={board} />
                        )}
                    />
                    <div className="pr-main">
                        <Button 
                            variant={"sidebar"} 
                            size={"sidebar"} 
                            className="w-full text-main-purple" 
                            onClick={handleOpenBoardModal}
                        >
                            <BoardIcon /> + Create Board
                        </Button>
                    </div>
                    <Modal isOpen={isBoardModalOpen} onClose={() => setIsBoardModalOpen(false)} isModalDelete={false}>
                        <BoardForm />
                    </Modal>
                </div>
                <DarkModeBox />
            </div>
        </Popover>
    </div>
  )
}

export default TopbarOptions