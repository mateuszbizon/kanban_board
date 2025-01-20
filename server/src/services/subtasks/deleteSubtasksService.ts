import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function deleteSubtasksService(subtasksIds: string[]) {
    return await prisma.subtask.deleteMany({
        where: {
            id: {
                in: subtasksIds
            }
        }
    })
}