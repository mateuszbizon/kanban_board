import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function deleteBoardService(boardId: string) {
    return await prisma.board.delete({
        where: {
            id: boardId
        }
    })
}