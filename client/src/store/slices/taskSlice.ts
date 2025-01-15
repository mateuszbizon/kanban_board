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
        editTask: (state, action: PayloadAction<{ board: Board, task: Task, oldColumndId: string }>) => {
            const currentBoard = action.payload.board

            if (action.payload.oldColumndId === action.payload.task.columnId) {
                const updatedBoard = { ...currentBoard, columns: currentBoard.columns.map(column => {
                    if (column.id === action.payload.task.columnId) {
                        return { ...column, tasks: column.tasks.map(task => {
                            if (task.id === action.payload.task.id) {
                                return action.payload.task
                            }

                            return task
                        }) }
                    }
    
                    return column
                }) }

                state.updatedBoard = updatedBoard
                return
            }

            const updatedBoard = { ...currentBoard, columns: currentBoard.columns.map(column => {
                if (column.id === action.payload.task.columnId) {
                    return { ...column, tasks: [...column.tasks, action.payload.task] }
                }

                if (column.id === action.payload.oldColumndId) {
                    return { ...column, tasks: column.tasks.filter(task => task.id !== action.payload.task.id) }
                }

                return column
            }) }

            state.updatedBoard = updatedBoard
        },
        deleteTask: (state, action: PayloadAction<{ board: Board, columndId: string, taskId: string }>) => {
            const currentBoard = action.payload.board
            const updatedBoard = { ...currentBoard, columns: currentBoard.columns.map(column => {
                if (column.id === action.payload.columndId) {
                    return { ...column, tasks: column.tasks.filter(task => task.id !== action.payload.taskId) }
                }

                return column
            }) }

            state.updatedBoard = updatedBoard
        },
    }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer