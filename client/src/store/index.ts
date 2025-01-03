import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import boardReducer from "./slices/boardSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        board: boardReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch