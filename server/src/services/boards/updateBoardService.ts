import { PrismaClient } from "@prisma/client";
import { BoardSchema } from "../../dtos/boardSchema";

const prisma = new PrismaClient()

export async function updateBoardService(board: BoardSchema, boardId: string) {
    return await prisma.board.update({
        where: {
            id: boardId,
        },
        data: {
            name: board.name,
            columns: {
                upsert: board.columns.map(column => ({
                    where: {
                        id: column.id || "",
                    },
                    update: {
                        name: column.name,
                    },
                    create: {
                        name: column.name
                    }
                }))
            }
        },
        include: {
            columns: {
                include: {
                    tasks: {
                        include: {
                            subtasks: true
                        }
                    }
                }
            }
        }
    })
}