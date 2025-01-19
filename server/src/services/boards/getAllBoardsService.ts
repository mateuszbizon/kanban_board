import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getAllBoardsService() {
    return await prisma.board.findMany({
        include: {
            columns: {
                include: {
                    tasks: {
                        include: {
                            subtasks: true,
                        }
                    }
                }
            }
        }
    })
}