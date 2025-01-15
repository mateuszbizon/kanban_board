import { Board, SubTask } from "@/types"
import { AppDispatch, RootState } from ".."
import { editSubtask } from "../slices/subtaskSlice"
import { updateCurrentBoard } from "../slices/boardSlice"

export const handleEditSubtask = (board: Board, columndId: string, subtask: SubTask) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(editSubtask({ board, columndId, subtask }))

    const updatedBoard = getState().subtask.updatedBoard

    dispatch(updateCurrentBoard(updatedBoard!))
}