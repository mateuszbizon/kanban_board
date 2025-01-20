import { Board, Task } from "@prisma/client"

export type CreateBoardResponse = {
    board: Board
}

export type GetAllBoardsResponse = {
    boards: Board[]
}

export type UpdateBoardResponse = {
    board: Board
}

export type DeleteBoardResponse = {
    board: Board
}

export type CreateTaskResponse = {
    task: Task
}