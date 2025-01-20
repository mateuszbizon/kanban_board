import { Request, Response, NextFunction } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { boardSchema, BoardSchema } from "../../dtos/boardSchema";
import { BadRequestError } from "../../errors/BadRequestError";
import { UpdateBoardParams } from "../../types/params";
import { getBoardByIdService } from "../../services/boards/getBoardByIdService";
import { NotFoundError } from "../../errors/NotFoundError";
import { MESSAGES } from "../../constants/messages";
import { updateBoardService } from "../../services/boards/updateBoardService";
import { UpdateBoardResponse } from "../../types/responses";
import { getColumnsByBoardIdService } from "../../services/columns/getColumnsByBoardIdService";
import { deleteColumnsService } from "../../services/columns/deleteColumnsService";

export async function updateBoardController(req: Request<UpdateBoardParams, {}, BoardSchema>, res: Response<UpdateBoardResponse>, next: NextFunction) {
    const { name, columns } = req.body
    const { boardId } = req.params

    try {
        const validationResult = boardSchema.safeParse(req.body)
        
        if (!validationResult.success) {
            return next(new BadRequestError(validationResult.error.errors[0].message))
        }

        const existingBoard = await getBoardByIdService(boardId)

        if (!existingBoard) {
            return next(new NotFoundError(MESSAGES.board.boardNotFound))
        }

        const columnIds = columns.map(column => column.id).filter(Boolean) as string[]

        const existingColumns = await getColumnsByBoardIdService(boardId)

        const columnsToDelete = existingColumns.filter(column => !columnIds.includes(column.id)).map(column => column.id)

        if (columnsToDelete.length > 0) {
            await deleteColumnsService(columnsToDelete)
        }

        const updatedBoard = await updateBoardService({ name, columns }, boardId)

        res.status(200).json({
            board: updatedBoard
        })
    } catch (error) {
        console.log(error)
        next(new DatabaseError())
    }
}