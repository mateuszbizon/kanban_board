import React from 'react'
import Modal from '../common/Modal'
import { Task } from '@/types';
import useDeleteTask from '@/hooks/services/tasks/useDeleteTask';

type DeleteTaskProps = {
    isDeleteTaskOpen: boolean;
    setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>
    task: Task;
    closeCurrentTask?: () => void;
}

function DeleteTask({ isDeleteTaskOpen, setIsDeleteTaskOpen, task, closeCurrentTask }: DeleteTaskProps) {
    const { handleDeleteTask, isPending } = useDeleteTask()

    function handleDelete() {
        handleDeleteTask(task.id, {
            onSettled: () => {
                if (closeCurrentTask) {
                    closeCurrentTask()
                }
            }
        })

    }

  return (
    <div>
        <Modal isOpen={isDeleteTaskOpen} onClose={() => setIsDeleteTaskOpen(false)} isModalDelete={true} onDelete={handleDelete} isPending={isPending}>
            <div className='space-y-5'>
                <span className='text-red text-lg'>Delete this task?</span>
                <p className='text-medium-grey text-2xs'>Are you sure you want to delete the ‘{task.title}’ task and its subtasks? This action cannot be reversed.</p>
            </div>
        </Modal>
    </div>
  )
}

export default DeleteTask