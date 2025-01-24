import { Column } from "@/types";
import TasksList from "../lists/TasksList";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

type ColumnCardProps = {
    column: Column;
}

function ColumnCard({ column }: ColumnCardProps) {
    const { setNodeRef } = useDroppable({
        id: column.id
    })

  return (
    <div ref={setNodeRef} className="w-column">
        <TasksList 
            tasks={column.tasks}
            renderItem={(task) => (
                <TaskCard key={task.id} task={task} />
            )}
        />
    </div>
  )
}

export default ColumnCard