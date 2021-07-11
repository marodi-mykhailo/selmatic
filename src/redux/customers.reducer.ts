import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appAPI} from "../api/app.api";
import {AppStatusType, setStatus} from "./app.reducer";

export type CustomerType = {
    customer: {
        id: number
        customer_id: string
        seller_id: string
        login: string
        email: string
        first_name: string
        last_name: string
        address: string
        city: string
        orders_id: string
        no_tel: string
        orders_table_id: string
        office: string
        guest: string
        orders: string
        created_at: string
        updated_at: string
    },
    customer_orders: {
        status: string
    }

}

const initialState: Array<CustomerType> = []

export const getCustomers = createAsyncThunk(
    "get_customers",
    async (params, {dispatch}) => {
        try {
            const response = await appAPI.getCustomers()
            dispatch(setStatus({type: "success", message: "Success data fetching"}))
            return response.data
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {},
    extraReducers: {
        [getCustomers.fulfilled.type]: (state, action: PayloadAction<Array<CustomerType>>) => {
            return [...action.payload]
        },
        [getCustomers.pending.type]: (state, action: PayloadAction<AppStatusType>) => {

        },
        [getCustomers.rejected.type]: (state) => {
            return []
        }
    }
})


export default customersSlice.reducer;