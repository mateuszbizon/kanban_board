import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function updateSubtaskService(subtaskId: string, isCompleted: boolean) {
    return await prisma.subtask.update({
        where: {
            id: subtaskId
        },
        data: {
            isCompleted
        }
    })
    
}