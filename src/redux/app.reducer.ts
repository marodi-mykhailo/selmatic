import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type AppStatusType = {
    type: "idle" | "success" | "loading" | "error"
    message: string
}

export type AppResponseType = {
    isDesktop: boolean
    isTablet: boolean
    isMobile: boolean
}

export type AppReducerType = {
    response: AppResponseType,
    status: AppStatusType

}

const initialState: AppReducerType = {
    response: {
        isDesktop: true,
        isTablet: false,
        isMobile: false
    },
    status: {
        type: "idle",
        message: ""
    }

}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setIsTablet(state) {
            state.response.isTablet = true
            state.response.isDesktop = false
            state.response.isMobile = false
        },
        setIsDesktop(state) {
            state.response.isTablet = false
            state.response.isDesktop = true
            state.response.isMobile = false
        },
        setIsMobile(state) {
            state.response.isTablet = false
            state.response.isDesktop = false
            state.response.isMobile = true
        },
        setStatus(state, action: PayloadAction<AppStatusType>) {
            state.status.type = action.payload.type
            state.status.message = action.payload.message
        },

    }
})


export default appSlice.reducer;

export const {setIsTablet, setIsDesktop, setIsMobile, setStatus} = appSlice.actions;
