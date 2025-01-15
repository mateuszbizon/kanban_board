import { Board, SubTask, Task } from "@/types";
import { addTask, deleteTask, editSubtask, editTask } from "../slices/taskSlice";
import { AppDispatch, RootState } from "..";
import { updateCurrentBoard } from "../slices/boardSlice";

export const handleAddTask = (board: Board, task: Task) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(addTask({ board, task }))

    const updatedBoard = getState().task.updatedBoard

    dispatch(updateCurrentBoard(updatedBoard!))
}

export const handleEditTask = (board: Board, task: Task, oldColumndId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(editTask({ board, task, oldColumndId }))

    const updatedBoard = getState().task.updatedBoard

    dispatch(updateCurrentBoard(updatedBoard!))
}

export const handleDeleteTask = (board: Board, columndId: string, taskId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(deleteTask({ board, columndId, taskId }))

    const updatedBoard = getState().task.updatedBoard

    dispatch(updateCurrentBoard(updatedBoard!))
}

export const handleEditSubtask = (board: Board, columndId: string, subtask: SubTask) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(editSubtask({ board, columndId, subtask }))

    const updatedBoard = getState().task.updatedBoard

    dispatch(updateCurrentBoard(updatedBoard!))
}