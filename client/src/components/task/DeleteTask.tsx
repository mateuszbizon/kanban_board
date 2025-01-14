import React from 'react'
import Modal from '../common/Modal'
import { Task } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { handleDeleteTask } from '@/store/actions/tasks';

type DeleteTaskProps = {
    isDeleteTaskOpen: boolean;
    setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>
    task: Task;
    onClose?: () => void;
}

function DeleteTask({ isDeleteTaskOpen, setIsDeleteTaskOpen, task, onClose }: DeleteTaskProps) {
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const dispatch = useDispatch<AppDispatch>()

    function handleDelete() {
        if (!currentBoard) return

        dispatch(handleDeleteTask(currentBoard, task.columnId, task.id))

        if (onClose) {
            onClose()
        }
    }

  return (
    <div>
        <Modal isOpen={isDeleteTaskOpen} onClose={() => setIsDeleteTaskOpen(false)} isModalDelete={true} onDelete={handleDelete}>
            <div className='space-y-5'>
                <span className='text-red text-lg'>Delete this task?</span>
                <p className='text-medium-grey text-2xs'>Are you sure you want to delete the ‘{task.title}’ task and its subtasks? This action cannot be reversed.</p>
            </div>
        </Modal>
    </div>
  )
}

export default DeleteTask