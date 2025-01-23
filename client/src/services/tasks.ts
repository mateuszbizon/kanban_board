import { TaskSchema } from "@/validations/taskSchema";
import { API } from ".";

export async function createTask({ task, columnId }: { task: TaskSchema, columnId: string }) {
    const { data } = await API.patch(`/tasks/create-task/${columnId}`, task)

    return data
}