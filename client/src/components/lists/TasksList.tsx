import { Task } from '@/types';
import React from 'react'

type TasksListProps = {
    tasks: Task[];
    renderItem: (task: Task, index: number) => React.ReactNode;
}

function TasksList({ tasks, renderItem }: TasksListProps) {
  return (
    <div className='space-y-5'>
        {tasks.map((task, index) => renderItem(task, index))}
    </div>
  )
}

export default TasksList