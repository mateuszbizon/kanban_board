import { getSubtasksCompletedLength } from '@/lib/getSubtasksCompletedLength';
import { Task } from '@/types';
import Modal from '../common/Modal';
import CurrentTask from '../task/CurrentTask';
import { useDraggable } from '@dnd-kit/core';
import { useState } from 'react';
import { Button } from '../ui/button';
import DragDropIcon from '../icons/DragDropIcon';

type TaskCardProps = {
    task: Task;
}

function TaskCard({ task }: TaskCardProps) {
    const [isCurrentTaskOpen, setIsCurrentTaskOpen] = useState(false)
    const { listeners, transform, attributes, setNodeRef } = useDraggable({
        id: task.id,
        data: task
    })

  return (
    <div
        ref={setNodeRef}
        style={{ transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined }}
    >
        <div className='group bg-white dark:bg-dark-grey p-main rounded-lg space-y-3 shadow-main cursor-pointer' onClick={() => setIsCurrentTaskOpen(true)}>
            <div className='flex justify-between items-center gap-5'>
                <p className='text-2sm text-black dark:text-white group-hover:text-main-purple transition-colors'>{task.title}</p>
                <Button {...listeners} {...attributes} variant={"transparent"} size={"icon"} className='shrink-0 p-0'><DragDropIcon /></Button>
            </div>
            <p className='text-xs text-medium-grey'>{getSubtasksCompletedLength(task.subtasks)} of {task.subtasks.length} subtasks</p>
        </div>
        <Modal isOpen={isCurrentTaskOpen} onClose={() => setIsCurrentTaskOpen(false)} isModalDelete={false}>
            <CurrentTask task={task} closeCurrentTask={() => setIsCurrentTaskOpen(false)}/>
        </Modal>
    </div>
  )
}

export default TaskCard