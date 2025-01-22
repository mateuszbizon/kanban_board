import { BoardSchema } from "@/validations/boardSchema";
import { API } from ".";

export async function getAllBoards() {
    const { data } = await API.get("/boards/get-all-boards")

    return data
}

export async function createBoard(board: BoardSchema) {
    const { data } = await API.post("/boards/create-board", board)

    return data
}

export async function updateBoard({ board, boardId }: { board: BoardSchema, boardId: string }) {
    const { data } = await API.put(`/boards/update-board/${boardId}`, board)

    return data   
}

export async function deleteBoard(boardId: string) {
    const { data } = await API.delete(`/boards/delete-board/${boardId}`)

    return data 
}