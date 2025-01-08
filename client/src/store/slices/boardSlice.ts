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
        },
        addBoard: (state, action: PayloadAction<Board>) => {
            state.boards = [...state.boards, action.payload]
            state.currentBoard = action.payload
        },
        editBoard: (state, action: PayloadAction<Board>) => {
            state.boards = state.boards.map(board => {
                if (board.id === action.payload.id) {
                    return action.payload
                }

                return board
            })
            state.currentBoard = action.payload
        }
    }
})

export const { setCurrentBoard, addBoard, editBoard } = boardSlice.actions
export default boardSlice.reducer