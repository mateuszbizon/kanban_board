import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getColumnByIdService(columnId: string) {
    return await prisma.column.findUnique({
        where: {
            id: columnId
        }
    })
}