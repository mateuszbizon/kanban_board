import { TASK_EMPTY, TASK_DESCRIPTION_EMPTY, TASK_STATUS_EMPTY, SUBTASK_EMPTY } from "../constants/validations"
import { z } from "zod"

export const taskSchema = z.object({
    title: z.string().min(1, TASK_EMPTY),
    description: z.string().min(1, TASK_DESCRIPTION_EMPTY),
    status: z.string().min(1, TASK_STATUS_EMPTY),
    subtasks: z.array(z.object({
        id: z.string().optional(),
        title: z.string().min(1, SUBTASK_EMPTY),
        isCompleted: z.boolean(),
    }))
})

export type TaskSchema = z.infer<typeof taskSchema>