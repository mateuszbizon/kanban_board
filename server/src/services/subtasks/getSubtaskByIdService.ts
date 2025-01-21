import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getSubtaskByIdService(subtaskId: string) {
    return await prisma.subtask.findUnique({
        where: {
            id: subtaskId
        }
    })
}