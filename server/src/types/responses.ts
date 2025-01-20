import { Board } from "@prisma/client"

export type CreateBoardResponse = {
    board: Board
}

export type GetAllBoardsResponse = {
    boards: Board[]
}

export type UpdateBoardResponse = {
    board: Board
}