export type Board = {
    id: string;
    name: string;
    columns: Column[];
}

export type Column = {
    id: string;
    name: string;
    tasks: Task[];
    boardId: string;
}

export type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
    subtasks: SubTask[];
    columnId: string;
}

export type SubTask = {
    id: string;
    title: string;
    isCompleted: boolean;
    taskId: string;
}