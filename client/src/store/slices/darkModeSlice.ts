import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DarkModeState = {
    isDarkMode: boolean;
}

const initialState: DarkModeState = {
    isDarkMode: false,
}

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload
        },
    }
})

export const { setDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer