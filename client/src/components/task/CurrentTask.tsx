import { Task } from '@/types';
import { Button } from '../ui/button';
import VerticalElipsisIcon from '../icons/VerticalElipsisIcon';
import { getSubtasksCompletedLength } from '@/lib/getSubtasksCompletedLength';
import { useRef, useState } from 'react';
import Popover from '../common/Popover';
import useClickOutside from '@/hooks/useClickOutside';

type CurrentTaskProps = {
    task: Task;
    onClose?: () => void;
}

function CurrentTask({ onClose, task }: CurrentTaskProps) {
    const [isTaskOptionsOpen, setIsTaskOptionsOpen] = useState(false)
    const [isEditTaskOpen, setIsEditTaskOpen] = useState(false)
    const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState(false)
    const taskOptionsRef = useRef<HTMLDivElement>(null)

    useClickOutside(taskOptionsRef, isTaskOptionsOpen, () => setIsTaskOptionsOpen(false))

    function showEditTask() {
        setIsEditTaskOpen(true)
        setIsTaskOptionsOpen(false)
        
        if (onClose) {
            onClose()
        }
    }

    function showDeleteTask() {
        setIsDeleteTaskOpen(true)
        setIsTaskOptionsOpen(false)

        if (onClose) {
            onClose()
        }
    }

  return (
    <div className='space-y-4'>
        <div className='flex justify-between items-center'>
            <h2 className='text-lg text-black'>{task.title}</h2>
            <div ref={taskOptionsRef} className='relative'>
                <Button variant={"transparent"} className='px-0' onClick={() => setIsTaskOptionsOpen(prev => !prev)}>
                    <VerticalElipsisIcon />
                </Button>
                <Popover isOpen={isTaskOptionsOpen} top='110%' right='0px'>
                    <div className="space-y-5 text-2xs">
                        <Button variant={"transparent"} className="p-0 text-medium-grey" onClick={showEditTask}>Edit Task</Button>
                        <Button variant={"transparent"} className="p-0 text-red" onClick={showDeleteTask}>Delete Task</Button>
                    </div>
                </Popover>
            </div>
        </div>
        <p className='text-2xs text-medium-grey'>{task.description}</p>
        <div className='space-y-3'>
            <span className='text-xs text-medium-grey'>Subtasks ({getSubtasksCompletedLength(task.subtasks)} of {task.subtasks.length})</span>
        </div>
    </div>
  )
}

export default CurrentTask