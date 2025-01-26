import { Board } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BoardState = {
    boards: Board[];
    currentBoard: Board | null;
}

const initialState: BoardState = {
    boards: [],
    currentBoard: null,
}

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setCurrentBoard(state, action: PayloadAction<Board>) {
            state.currentBoard = action.payload
        },
        setBoards: (state, action: PayloadAction<Board[]>) => {
            state.boards = action.payload
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
        },
        deleteBoard: (state, action: PayloadAction<{boardId: string}>) => {
            state.boards = state.boards.filter(board => board.id !== action.payload.boardId)
            state.currentBoard = state.boards[0]
        },
        updateCurrentBoard: (state, action: PayloadAction<Board>) => {
            state.boards = state.boards.map(board => {
                if (board.id === action.payload.id) {
                    return action.payload
                }

                return board
            })

            state.currentBoard = action.payload
        },
    }
})

export const { setCurrentBoard, setBoards, addBoard, editBoard, deleteBoard, updateCurrentBoard } = boardSlice.actions
export default boardSlice.reducer