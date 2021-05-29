import {createSlice} from "@reduxjs/toolkit";

export type AppReducerType = {
    isDesktop: boolean
    isTablet: boolean
    isMobile: boolean
}

const initialState: AppReducerType = {
    isDesktop: true,
    isTablet: false,
    isMobile: false
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setIsTablet(state) {
            state.isTablet = true
            state.isDesktop = false
            state.isMobile = false
        },
        setIsDesktop(state) {
            state.isTablet = false
            state.isDesktop = true
            state.isMobile = false
        },
        setIsMobile(state) {
            state.isTablet = false
            state.isDesktop = false
            state.isMobile = true
        }
    }
})


export default appSlice.reducer;

export const {setIsTablet, setIsDesktop, setIsMobile} = appSlice.actions;
