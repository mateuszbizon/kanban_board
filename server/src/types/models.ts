export type Board = {
    id: string;
    name: string;
    columns: Column[];
}

export type Column = {
    id: string;
    name: string;
    board: Board;
    boardId: string;
    tasks: Task[];
}

export type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
    column: Column;
    columnId: string;
    subtasks: Subtask[];
}

export type Subtask = {
    id: string;
    title: string;
    isCompleted: boolean;
    task: Task;
    taskId: string;
}