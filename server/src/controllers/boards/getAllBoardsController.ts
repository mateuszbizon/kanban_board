import { Request, Response, NextFunction } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { getAllBoardsService } from "../../services/boards/getAllBoardsService";
import { GetAllBoardsResponse } from "../../types/responses";

export async function getAllBoardsController(req: Request, res: Response<GetAllBoardsResponse>, next: NextFunction) {
    try {
        const boards = await getAllBoardsService()

        res.status(200).json({
            boards
        })
    } catch (error) {
        console.log(error)
        next(new DatabaseError())
    }
}