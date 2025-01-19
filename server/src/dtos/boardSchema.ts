import { BOARD_EMPTY, COLUMN_EMPTY, BOARD_MAX_LENGTH_MESSAGE, COLUMN_MAX_LENGTH_MESSAGE } from "../constants/validations"
import { z } from "zod"

export const boardSchema = z.object({
    name: z.string().min(1, BOARD_EMPTY).max(20, BOARD_MAX_LENGTH_MESSAGE),
    columns: z.array(z.object({
        id: z.string().optional(),
        name: z.string().min(1, COLUMN_EMPTY).max(20, COLUMN_MAX_LENGTH_MESSAGE),
    }))
})

export type BoardSchema = z.infer<typeof boardSchema>