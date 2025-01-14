import { Board } from "@/types";

export function getColumnByStatus(currentBoard: Board | null, taskStatus: string) {
    const column = currentBoard?.columns.find(c => c.name === taskStatus)

    return column
}