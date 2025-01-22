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