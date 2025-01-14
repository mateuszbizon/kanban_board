import React from 'react'
import Modal from '../common/Modal'
import { Task } from '@/types';

type DeleteTaskProps = {
    isDeleteTaskOpen: boolean;
    setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>
    task: Task;
    onClose?: () => void;
}

function DeleteTask({ isDeleteTaskOpen, setIsDeleteTaskOpen, task, onClose }: DeleteTaskProps) {
    function handleDelete() {
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