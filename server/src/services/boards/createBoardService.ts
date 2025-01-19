import { PrismaClient } from "@prisma/client";
import { BoardSchema } from "../../dtos/boardSchema";

const prisma = new PrismaClient()

export async function createBoardService(boardSchema: BoardSchema) {
    return await prisma.board.create({
        data: {
            name: boardSchema.name,
            columns: {
                createMany: {
                    data: boardSchema.columns
                }
            }
        },
        include: {
            columns: true,
        }
    })
}