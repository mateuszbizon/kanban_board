import { BOARD_MAX_LENGTH, COLUMN_MAX_LENGTH, MINIMUM_LENGTH } from "@/constants/validations"
import { z } from "zod"

export const boardSchema = z.object({
    name: z.string().min(1, MINIMUM_LENGTH).max(20, BOARD_MAX_LENGTH),
    columns: z.array(z.object({
        id: z.string().optional(),
        name: z.string().min(1, MINIMUM_LENGTH).max(20, COLUMN_MAX_LENGTH),
        tasks: z.any(),
        boardId: z.string().optional(),
    }))
})

export type BoardSchema = z.infer<typeof boardSchema>