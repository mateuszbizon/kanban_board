import { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { SubTask } from '@/types'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { handleEditSubtask } from '@/store/actions/tasks';

type SubtaskCheckboxProps = {
    subtask: SubTask;
    columnId: string
}

function SubtaskCheckbox({ subtask, columnId }: SubtaskCheckboxProps) {
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const dispatch = useDispatch<AppDispatch>()
    const [isCompleted, setIsCompleted] = useState(subtask.isCompleted)

    function toggleSubtask() {
        setIsCompleted(prev => !prev)

        if (!currentBoard) return

        dispatch(handleEditSubtask(currentBoard, columnId, subtask))
    }

  return (
    <div 
        className={`p-main rounded flex items-center gap-5 text-xs bg-light-grey hover:bg-main-purple-hover cursor-pointer ${isCompleted ? "text-black/50 line-through" : "text-black"}`} 
        onClick={toggleSubtask}
    >
        <Checkbox id={subtask.id} checked={isCompleted}/>
        <label>{subtask.title}</label>
    </div>
  )
}

export default SubtaskCheckbox