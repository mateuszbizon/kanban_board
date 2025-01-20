import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getSubtasksByTaskIdService(taskId: string) {
    return await prisma.subtask.findMany({
        where: {
            taskId
        }
    })
}