import { API } from ".";

export async function getAllBoards() {
    const { data } = await API.get("/boards/get-all-boards")

    return data
}