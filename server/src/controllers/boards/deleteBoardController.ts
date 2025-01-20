import { Request, Response, NextFunction } from "express"
import { DatabaseError } from "../../errors/DatabaseError"
import { DeleteBoardParams } from "../../types/params"
import { getBoardByIdService } from "../../services/boards/getBoardByIdService"
import { NotFoundError } from "../../errors/NotFoundError"
import { MESSAGES } from "../../constants/messages"
import { deleteBoardService } from "../../services/boards/deleteBoardService"
import { DeleteBoardResponse } from "../../types/responses"

export async function deleteBoardController(req: Request<DeleteBoardParams>, res: Response<DeleteBoardResponse>, next: NextFunction) {
    const { boardId } = req.params

    try {
        const existingBoard = await getBoardByIdService(boardId)

        if (!existingBoard) {
            return next(new NotFoundError(MESSAGES.board.boardNotFound))
        }

        const deletedBoard = await deleteBoardService(boardId)

        res.status(200).json({
            board: deletedBoard
        })
    } catch (error) {
        console.log(error)
        next(new DatabaseError())
    }
}