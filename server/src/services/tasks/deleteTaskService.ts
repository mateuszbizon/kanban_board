import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function deleteTaskService(taskId: string) {
    return await prisma.task.delete({
        where: {
            id: taskId
        }
    })
}