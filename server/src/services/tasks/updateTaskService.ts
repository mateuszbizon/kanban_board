import { PrismaClient } from "@prisma/client";
import { TaskSchema } from "../../dtos/taskSchema";

const prisma = new PrismaClient()

export async function updateTaskService(task: TaskSchema, taskId: string, columnId: string) {
    return await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            title: task.title,
            description: task.description,
            status: task.status,
            columnId,
            subtasks: {
                upsert: task.subtasks.map(subtask => ({
                    where: {
                        id: subtask.id || ""
                    },
                    update: {
                        title: subtask.title
                    },
                    create: {
                        title: subtask.title,
                        isCompleted: subtask.isCompleted
                    }
                }))
            }
        },
        include: {
            subtasks: true
        }
    })
}