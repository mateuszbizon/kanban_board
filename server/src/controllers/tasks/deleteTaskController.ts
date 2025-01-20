import { Request, NextFunction, Response } from "express"
import { DatabaseError } from "../../errors/DatabaseError"
import { DeleteTaskParams } from "../../types/params"
import { getTaskByIdService } from "../../services/tasks/getTaskByIdService"
import { NotFoundError } from "../../errors/NotFoundError"
import { MESSAGES } from "../../constants/messages"
import { deleteTaskService } from "../../services/tasks/deleteTaskService"
import { DeleteTaskResponse } from "../../types/responses"

export async function deleteTaskController(req: Request<DeleteTaskParams>, res: Response<DeleteTaskResponse>, next: NextFunction) {
    const { taskId } = req.params

    try {
        const existingTask = await getTaskByIdService(taskId)

        if (!existingTask) {
            return next(new NotFoundError(MESSAGES.task.taskNotFound))
        }

        const deletedTask = await deleteTaskService(taskId)

        res.status(200).json({
            task: deletedTask
        })
    } catch (error) {
        console.log(error)
        next(new DatabaseError())
    }
}