import { API } from ".";

export async function updateSubtask(subtaskId: string) {
    const { data } = await API.patch(`/subtasks/update-subtask/${subtaskId}`)

    return data
}