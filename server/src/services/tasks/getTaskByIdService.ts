import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getTaskByIdService(taskId: string) {
    return await prisma.task.findUnique({
        where: {
            id: taskId
        }
    })
}