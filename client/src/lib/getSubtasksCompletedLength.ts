import { SubTask } from "@/types";

export function getSubtasksCompletedLength(subtasks: SubTask[]) {
    const completedSubtasks = subtasks.filter(subtask => subtask.isCompleted === true)

    return completedSubtasks.length
}