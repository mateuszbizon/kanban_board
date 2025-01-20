import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function deleteColumnsService(columnsIds: string[]) {
    return await prisma.column.deleteMany({
        where: {
            id: {
                in: columnsIds
            }
        }
    })
}