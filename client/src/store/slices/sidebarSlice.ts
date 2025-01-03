import { createSlice } from "@reduxjs/toolkit"

type SidebarState = {
    isOpen: boolean
}

const initialState: SidebarState = {
    isOpen: true
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        showSidebar: (state) => {
            state.isOpen = true
        },
        hideSidebar: (state) => {
            state.isOpen = false
        }
    }
})

export const { showSidebar, hideSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer