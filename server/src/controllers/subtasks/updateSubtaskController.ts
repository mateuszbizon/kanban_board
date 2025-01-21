import { Request, Response, NextFunction } from "express"
import { DatabaseError } from "../../errors/DatabaseError"
import { UpdateSubtaskParams } from "../../types/params"
import { getSubtaskByIdService } from "../../services/subtasks/getSubtaskByIdService"
import { NotFoundError } from "../../errors/NotFoundError"
import { MESSAGES } from "../../constants/messages"
import { updateSubtaskService } from "../../services/subtasks/updateSubtaskService"
import { UpdateSubtaskResponse } from "../../types/responses"

export async function updateSubtaskController(req: Request<UpdateSubtaskParams>, res: Response<UpdateSubtaskResponse>, next: NextFunction) {
    const { subtaskId } = req.params

    try {
        const existingSubtask = await getSubtaskByIdService(subtaskId)

        if (!existingSubtask) {
            return next(new NotFoundError(MESSAGES.subtask.subtaskNotFound))
        }

        const isCompleted = !existingSubtask.isCompleted

        const updatedSubtask = await updateSubtaskService(subtaskId, isCompleted)

        res.status(200).json({
            subtask: updatedSubtask
        })
    } catch (error) {
        console.log(error)
        next(new DatabaseError())
    }
}