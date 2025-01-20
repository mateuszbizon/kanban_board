import { PrismaClient } from "@prisma/client";
import { TaskSchema } from "../../dtos/taskSchema";

const prisma = new PrismaClient()

export async function createTaskService(task: TaskSchema, columnId: string) {
    return await prisma.task.create({
        data: {
            title: task.title,
            description: task.description,
            status: task.status,
            columnId,
            subtasks: {
                createMany: {
                    data: task.subtasks
                }
            }
        },
        include: {
            subtasks: true,
        }
    })
}