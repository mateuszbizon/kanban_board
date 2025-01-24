import { Request, Response, NextFunction } from "express"
import { DatabaseError } from "../../errors/DatabaseError"
import { MoveTaskParams } from "../../types/params"
import { getColumnByIdService } from "../../services/columns/getColumnByIdService"
import { NotFoundError } from "../../errors/NotFoundError"
import { MESSAGES } from "../../constants/messages"
import { getTaskByIdService } from "../../services/tasks/getTaskByIdService"
import { moveTaskService } from "../../services/tasks/moveTaskService"
import { MoveTaskResponse } from "../../types/responses"

export async function moveTaskController(req: Request<MoveTaskParams>, res: Response<MoveTaskResponse>, next: NextFunction) {
    const { taskId, newColumnId } = req.params

    try {
        const existingColumn = await getColumnByIdService(newColumnId)

        if (!existingColumn) {
            return next(new NotFoundError(MESSAGES.column.columnNotFound))
        }

        const existingTask = await getTaskByIdService(taskId)

        if (!existingTask) {
            return next(new NotFoundError(MESSAGES.task.taskNotFound))
        }

        const updatedTask = await moveTaskService(taskId, newColumnId)

        res.status(200).json({
            task: updatedTask,
            oldColumnId: existingTask.columnId
        })
    } catch (error) {
        console.log(error)
        next(new DatabaseError())
    }
}