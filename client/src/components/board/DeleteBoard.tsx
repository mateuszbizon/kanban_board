import React from 'react'
import Modal from '../common/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { deleteBoard } from '@/store/slices/boardSlice'

type DeleteBoardProps = {
    isDeleteBoardOpen: boolean;
    setIsDeleteBoardOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function DeleteBoard({ isDeleteBoardOpen, setIsDeleteBoardOpen }: DeleteBoardProps) {
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const dispatch = useDispatch<AppDispatch>()

    function handleDeleteBoard() {
        if (currentBoard) {
            dispatch(deleteBoard({ boardId: currentBoard.id }))
            setIsDeleteBoardOpen(false)
        }
    }

  return (
    <div>
        <Modal isOpen={isDeleteBoardOpen} onClose={() => setIsDeleteBoardOpen(false)} isModalDelete={true} onDelete={handleDeleteBoard}>
            <div className='space-y-5'>
                <span className='text-red text-lg'>Delete this board?</span>
                <p className='text-medium-grey text-2xs'>Are you sure you want to delete the ‘{currentBoard?.name}’ board? This action will remove all columns and tasks and cannot be reversed.</p>
            </div>
        </Modal>
    </div>
  )
}

export default DeleteBoard