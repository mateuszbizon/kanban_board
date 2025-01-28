import React from 'react'
import Modal from '../common/Modal'
import BoardForm from '../forms/BoardForm'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

type EditBoardProps = {
    isEditBoardOpen: boolean;
    setIsEditBoardOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function EditBoard({ isEditBoardOpen, setIsEditBoardOpen }: EditBoardProps) {
    const { currentBoard } = useSelector((state: RootState) => state.board)

  return (
    <div>
        <Modal isOpen={isEditBoardOpen} onClose={() => setIsEditBoardOpen(false)} isModalDelete={false}>
            <BoardForm board={currentBoard} onCloseModal={() => setIsEditBoardOpen(false)} />
        </Modal>
    </div>
  )
}

export default EditBoard