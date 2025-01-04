import { Task } from '@/types';

type TaskCardProps = {
    task: Task;
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className='group bg-white p-main rounded-lg space-y-3 shadow-main cursor-pointer'>
        <p className='text-2sm text-black group-hover:text-main-purple transition-colors'>{task.title}</p>
        <p className='text-xs text-medium-grey'>0 of {task.subtasks.length} subtasks</p>
    </div>
  )
}

export default TaskCard