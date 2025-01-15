import { Board, SubTask } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SubtaskState = {
    updatedBoard: Board | null;
}

const initialState: SubtaskState = {
    updatedBoard: null
}

const subtaskSlice = createSlice({
    name: "subtask",
    initialState,
    reducers: {
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

export const { editSubtask } = subtaskSlice.actions
export default subtaskSlice.reducer