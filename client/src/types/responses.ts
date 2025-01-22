import { Board } from "."

export type GetAllBoardsResponse = {
    boards: Board[]
}

export type CreateBoardResponse = {
    board: Board
}