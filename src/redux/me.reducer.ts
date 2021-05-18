import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../api/app.api";

type CompanyType = {
    name: string
    taxId: string
}

export type MeReducerType = {
    id: string
    login: string
    firstName: string
    lastName: string
    email: string
    company: CompanyType
}


const initialState: MeReducerType[] = []

export const getMe = createAsyncThunk(
    "me/getMe",
    async () => {
        const response = await authAPI.getMe()
        return response.data
    }
)

const meSlice = createSlice({
    name: "me",
    initialState,
    reducers: {},
    extraReducers: {
        [getMe.fulfilled.type]: (state, action: PayloadAction<MeReducerType[]>) => {
            state.push(...action.payload)
        }
    }
})

export default meSlice.reducer;
