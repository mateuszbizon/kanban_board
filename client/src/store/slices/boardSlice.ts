import { Board } from "@/types";
import boardsData from "@/data/boards.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BoardState = {
    boards: Board[];
    currentBoard: Board | null;
}

const initialState: BoardState = {
    boards: boardsData.boards,
    currentBoard: boardsData.boards[0],
}

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setCurrentBoard(state, action: PayloadAction<Board>) {
            state.currentBoard = action.payload
        }
    }
})

export const { setCurrentBoard } = boardSlice.actions
export default boardSlice.reducer