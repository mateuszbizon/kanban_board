import { Column } from "@/types";
import TasksList from "../lists/TasksList";
import TaskCard from "./TaskCard";

type ColumnCardProps = {
    column: Column;
}

function ColumnCard({ column }: ColumnCardProps) {
  return (
    <div className="w-column">
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