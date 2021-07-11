import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../api/app.api";

type CompanyType = {
    name: string
    taxId: string
}

export type UserType = {
    id: number,
    user_id: number,
    type: string,
    full_name: string,
    full_office_name: string,
    adress: string,
    post_code: string,
    city: string,
    NIP: string,
    phone_number: string,
    country: string,
    created_at: string,
    updated_at: string
}


const initialState: UserType[] = []

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
        [getMe.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
            state.push(...action.payload)
        }
    }
})

export default meSlice.reducer;
