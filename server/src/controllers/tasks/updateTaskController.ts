import { Request, Response, NextFunction } from "express"
import { DatabaseError } from "../../errors/DatabaseError"
import { taskSchema, TaskSchema } from "../../dtos/taskSchema"
import { UpdateTaskParams } from "../../types/params"
import { BadRequestError } from "../../errors/BadRequestError"
import { getColumnByIdService } from "../../services/columns/getColumnByIdService"
import { NotFoundError } from "../../errors/NotFoundError"
import { MESSAGES } from "../../constants/messages"
import { getTaskByIdService } from "../../services/tasks/getTaskByIdService"
import { getSubtasksByTaskIdService } from "../../services/subtasks/getSubtasksByTaskIdService"
import { deleteSubtasksService } from "../../services/subtasks/deleteSubtasksService"
import { updateTaskService } from "../../services/tasks/updateTaskService"
import { UpdateTaskResponse } from "../../types/responses"

export async function updateTaskController(req: Request<UpdateTaskParams, {}, TaskSchema>, res: Response<UpdateTaskResponse>, next: NextFunction) {
    const { subtasks } = req.body
    const { columnId, taskId } = req.params

    try {
        const validationResult = taskSchema.safeParse(req.body)
        
        if (!validationResult.success) {
            return next(new BadRequestError(validationResult.error.errors[0].message))
        }

        const existingColumn = await getColumnByIdService(columnId)

        if (!existingColumn) {
            return next(new NotFoundError(MESSAGES.column.columnNotFound))
        }

        const existingTask = await getTaskByIdService(taskId)

        if (!existingTask) {
            return next(new NotFoundError(MESSAGES.task.taskNotFound))
        }

        const oldColumnId = existingTask.columnId

        const subtaskIds = subtasks.map(subtask => subtask.id).filter(Boolean) as string[]

        const exisintgSubtasks = await getSubtasksByTaskIdService(taskId)

        const subtasksToDelete = exisintgSubtasks.filter(subtask => !subtaskIds.includes(subtask.id)).map(subtask => subtask.id)

        if (subtasksToDelete.length > 0) {
            await deleteSubtasksService(subtasksToDelete)
        }

        const updatedTask = await updateTaskService(req.body, taskId, columnId)

        res.status(200).json({
            task: updatedTask,
            oldColumnId
        })
    } catch (error) {
        console.log(error)
        next(new DatabaseError())
    }
}