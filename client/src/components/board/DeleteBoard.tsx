import React from 'react'
import Modal from '../common/Modal'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import useDeleteBoard from '@/hooks/services/boards/useDeleteBoard'

type DeleteBoardProps = {
    isDeleteBoardOpen: boolean;
    setIsDeleteBoardOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function DeleteBoard({ isDeleteBoardOpen, setIsDeleteBoardOpen }: DeleteBoardProps) {
    const { handleDeleteBoard } = useDeleteBoard()
    const { currentBoard } = useSelector((state: RootState) => state.board)

    function onDeleteBoard() {
        handleDeleteBoard(currentBoard?.id!, {
            onSettled: () => {
                setIsDeleteBoardOpen(false)
            }
        })
    }

  return (
    <div>
        <Modal isOpen={isDeleteBoardOpen} onClose={() => setIsDeleteBoardOpen(false)} isModalDelete={true} onDelete={onDeleteBoard}>
            <div className='space-y-5'>
                <span className='text-red text-lg'>Delete this board?</span>
                <p className='text-medium-grey text-2xs'>Are you sure you want to delete the ‘{currentBoard?.name}’ board? This action will remove all columns and tasks and cannot be reversed.</p>
            </div>
        </Modal>
    </div>
  )
}

export default DeleteBoard