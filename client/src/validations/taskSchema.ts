import { MINIMUM_LENGTH } from "@/constants/validations"
import { z } from "zod"

export const taskSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(1, MINIMUM_LENGTH),
    description: z.string().min(1, MINIMUM_LENGTH),
    status: z.string().min(1, MINIMUM_LENGTH),
    subtasks: z.array(z.object({
        id: z.string().optional(),
        title: z.string().min(1, MINIMUM_LENGTH),
        isCompleted: z.boolean(),
    }))
})

export type TaskSchema = z.infer<typeof taskSchema>