import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import boardReducer from "./slices/boardSlice";
import taskReducer from "./slices/taskSlice"
import subtaskReducer from "./slices/subtaskSlice"

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        board: boardReducer,
        task: taskReducer,
        subtask: subtaskReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch