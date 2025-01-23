import { TaskSchema } from "@/validations/taskSchema";
import { API } from ".";

export async function createTask({ task, columnId }: { task: TaskSchema, columnId: string }) {
    const { data } = await API.patch(`/tasks/create-task/${columnId}`, task)

    return data
}

export async function updateTask({ task, taskId, columndId }: { task: TaskSchema, taskId: string, columndId: string }) {
    const { data } = await API.put(`/tasks/update-task/${taskId}/${columndId}`, task)

    return data
}

export async function deleteTask(taskId: string) {
    const { data } = await API.delete(`/tasks/delete-task/${taskId}`)

    return data
}