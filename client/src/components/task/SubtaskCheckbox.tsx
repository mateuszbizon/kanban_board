import React, { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { SubTask } from '@/types'

type SubtaskCheckboxProps = {
    subtask: SubTask
}

function SubtaskCheckbox({ subtask }: SubtaskCheckboxProps) {
    const [isCompleted, setIsCompleted] = useState(subtask.isCompleted)

    function toggleSubtask() {
        setIsCompleted(prev => !prev)
    }

  return (
    <div 
        className={`p-main rounded flex items-center gap-5 text-xs bg-light-grey hover:bg-main-purple-hover cursor-pointer ${isCompleted ? "text-black/50 line-through" : "text-black"}`} 
        onClick={toggleSubtask}
    >
        <Checkbox id={subtask.id} checked={isCompleted}/>
        <label htmlFor={subtask.id}>{subtask.title}</label>
    </div>
  )
}

export default SubtaskCheckbox