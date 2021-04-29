import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type SidebarReducerStateType = {
    isCollapsed: boolean
}

const initialState: SidebarReducerStateType = {
    isCollapsed: false
}


const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setIsCollapsed(state, action: PayloadAction<boolean>) {
            state.isCollapsed = action.payload
        }
    }
})

export default sidebarSlice.reducer

export const {setIsCollapsed} = sidebarSlice.actions