import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getBoardByIdService(boardId: string) {
    return await prisma.board.findUnique({
        where: {
            id: boardId
        }
    })
}