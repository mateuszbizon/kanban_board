import { Board, SubTask, Task } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TaskState = {
    updatedBoard: Board | null;
}

const initialState: TaskState = {
    updatedBoard: null
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ board: Board, task: Task }>) => {
            const currentBoard = action.payload.board
            const updatedBoard = { ...currentBoard, columns: currentBoard.columns.map(column => {
                if (column.name === action.payload.task.status) {
                    return { ...column, tasks: [...column.tasks, action.payload.task] }
                }

                return column
            }) }

            state.updatedBoard = updatedBoard
        },
        editSubtask: (state, action: PayloadAction<{ board: Board, columndId: string, subtask: SubTask }>) => {
            const currentBoard = action.payload.board
            const updatedBoard = { ...currentBoard, columns: currentBoard.columns.map(column => {
                if (column.id === action.payload.columndId) {
                    return { ...column, tasks: column.tasks.map(task => {
                        if (task.id === action.payload.subtask.taskId) {
                            return { ...task, subtasks: task.subtasks.map(subtask => {
                                if (subtask.id === action.payload.subtask.id) {
                                    return { ...subtask, isCompleted: !subtask.isCompleted }
                                }

                                return subtask
                            }) }
                        }

                        return task
                    }) }
                }

                return column
            }) }

            state.updatedBoard = updatedBoard
        },
    }
})

export const { addTask, editSubtask } = taskSlice.actions
export default taskSlice.reducer