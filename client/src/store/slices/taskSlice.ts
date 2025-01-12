import { Board, Task } from "@/types"
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
    }
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer