import { Request, Response, NextFunction } from "express"
import { DatabaseError } from "../../errors/DatabaseError"
import { taskSchema, TaskSchema } from "../../dtos/taskSchema"
import { CreateTaskParams } from "../../types/params"
import { BadRequestError } from "../../errors/BadRequestError"
import { getColumnByIdService } from "../../services/columns/getColumnByIdService"
import { NotFoundError } from "../../errors/NotFoundError"
import { MESSAGES } from "../../constants/messages"
import { createTaskService } from "../../services/tasks/createTaskService"
import { CreateTaskResponse } from "../../types/responses"

export async function createTaskController(req: Request<CreateTaskParams, {}, TaskSchema>, res: Response<CreateTaskResponse>, next: NextFunction) {
    const { title, description, status, subtasks } = req.body
    const { columnId } = req.params

    try {
        const validationResult = taskSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(validationResult.error.errors[0].message))
        }

        const existingColumn = await getColumnByIdService(columnId)

        if (!existingColumn) {
            return next(new NotFoundError(MESSAGES.column.columnNotFound))
        }

        const createdTask = await createTaskService(req.body, columnId)

        res.status(201).json({
            task: createdTask
        })
    } catch (error) {
        console.log(error)
        next(new DatabaseError())
    }
}