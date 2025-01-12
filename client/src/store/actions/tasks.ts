import { Board, Task } from "@/types";
import { addTask } from "../slices/taskSlice";
import { AppDispatch, RootState } from "..";
import { updateCurrentBoard } from "../slices/boardSlice";

export const handleAddTask = (board: Board, task: Task) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(addTask({ board, task }))

    const updatedBoard = getState().task.updatedBoard

    dispatch(updateCurrentBoard(updatedBoard!))
}