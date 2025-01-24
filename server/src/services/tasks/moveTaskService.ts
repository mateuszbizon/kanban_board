import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function moveTaskService(taskId: string, newColumndId: string) {
    return await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            columnId: newColumndId
        }
    })
}