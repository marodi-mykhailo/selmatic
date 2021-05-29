import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appAPI} from "../api/app.api";

export type CustomerType = {
    id: number
    customer_id: string
    seller_id: string
    login: "string"
    email: string
    first_name: string
    last_name: string
    guest: string
    orders: string
    created_at: string
    updated_at: string
}


const initialState: Array<CustomerType> = []

export const getCustomers = createAsyncThunk(
    "customers",
    async () => {
        const response = await appAPI.getCustomers()
        return response.data
    }
)

const customersSlice = createSlice({
    name: "customersTable",
    initialState,
    reducers: {},
    extraReducers: {
        [getCustomers.fulfilled.type]: (state, action: PayloadAction<Array<CustomerType>>) => {
            state.push(...action.payload)
        }
    }
})


export default customersSlice.reducer;