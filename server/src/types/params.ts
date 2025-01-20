export type UpdateBoardParams = {
    boardId: string;
}

export type DeleteBoardParams = {
    boardId: string;
}

export type CreateTaskParams = {
    columnId: string;
}

export type UpdateTaskParams = {
    taskId: string;
    columnId: string;
}

export type DeleteTaskParams = {
    taskId: string;
}