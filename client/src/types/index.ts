export type Board = {
    id: string;
    name: string;
    columns: Column[];
}

export type Column = {
    id: string;
    name: string;
    tasks: Task[];
}

export type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
    subtasks: SubTask[];
}

export type SubTask = {
    id: string;
    title: string;
    isCompleted: boolean;
}