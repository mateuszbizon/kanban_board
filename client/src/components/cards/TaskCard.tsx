import { getSubtasksCompletedLength } from '@/lib/getSubtasksCompletedLength';
import { Task } from '@/types';
import Modal from '../common/Modal';
import CurrentTask from '../task/CurrentTask';
import { useState } from 'react';

type TaskCardProps = {
    task: Task;
}

function TaskCard({ task }: TaskCardProps) {
    const [isCurrentTaskOpen, setIsCurrentTaskOpen] = useState(false)

  return (
    <div>
        <div className='group bg-white dark:bg-dark-grey p-main rounded-lg space-y-3 shadow-main cursor-pointer' onClick={() => setIsCurrentTaskOpen(true)}>
            <p className='text-2sm text-black dark:text-white group-hover:text-main-purple transition-colors'>{task.title}</p>
            <p className='text-xs text-medium-grey'>{getSubtasksCompletedLength(task.subtasks)} of {task.subtasks.length} subtasks</p>
        </div>
        <Modal isOpen={isCurrentTaskOpen} onClose={() => setIsCurrentTaskOpen(false)} isModalDelete={false}>
            <CurrentTask task={task} closeCurrentTask={() => setIsCurrentTaskOpen(false)}/>
        </Modal>
    </div>
  )
}

export default TaskCard