import { Board } from "."

export type GetAllBoardsResponse = {
    boards: Board[]
}

export type CreateBoardResponse = {
    board: Board
}

export type UpdateBoardResponse = {
    board: Board
}

export type DeleteBoardResponse = {
    board: Board
}