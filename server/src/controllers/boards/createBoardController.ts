import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { boardSchema, BoardSchema } from "../../dtos/boardSchema";
import { BadRequestError } from "../../errors/BadRequestError";
import { createBoardService } from "../../services/boards/createBoardService";
import { CreateBoardResponse } from "../../types/responses";

export async function createBoardController(req: Request<{}, {}, BoardSchema>, res: Response<CreateBoardResponse>, next: NextFunction) {
    const { name, columns } = req.body

    try {
        const validationResult = boardSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(validationResult.error.errors[0].message))
        }

        const createdBoard = await createBoardService({ name, columns })
        
        res.status(201).json({
            board: createdBoard
        })
    } catch (error) {
        console.log(error)
        next(new DatabaseError())
    }
}