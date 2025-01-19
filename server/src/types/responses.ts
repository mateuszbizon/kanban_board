import { Board } from "@prisma/client"

export type CreateBoardResponse = {
    board: Board
}

export type GetAllBoardsResponse = {
    boards: Board[]
}