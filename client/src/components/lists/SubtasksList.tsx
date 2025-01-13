import { SubTask } from "@/types"

type SubtasksListProps = {
    subtasks: SubTask[];
    renderItem: (subtask: SubTask, index: number) => React.ReactNode
}

function SubtasksList({ subtasks, renderItem }: SubtasksListProps) {
  return (
    <div className='space-y-2'>
        {subtasks.map((subtask, index) => renderItem(subtask, index))}
    </div>
  )
}

export default SubtasksList