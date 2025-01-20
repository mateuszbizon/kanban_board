import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getColumnsByBoardIdService(boardId: string) {
    return await prisma.column.findMany({
        where: {
            boardId
        }
    })
}