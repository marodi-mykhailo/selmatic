import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appAPI, orderAPI} from "../api/app.api";
import {setStatus} from "./app.reducer";

export type OrderType = {
    id: number,
    offer_id: string
    order_id: string
    offer_name: string
    offer_price: string
    offer_currency: string
    quantity: string
    order_price: string
    order_currency: string
    customer_id: string
    isCanceled: number
    seller_id: string
    order_date: string
    created_at: string
    updated_at: string
}

export type GetOrdersType = {
    order: {
        "0": OrderType
        link: string
        platform: string
        send_status: string
        date_PayU: string
        sent_date: string
        ended: string
        codes: string[]
    }
    customer: {
        name: string
        login: string
        email: string
    }
}

const initialState: GetOrdersType[] = []

export const getOrders = createAsyncThunk(
    "orders", async (params, {dispatch}) => {
        try {
            const response = await orderAPI.getOrders()
            dispatch(setStatus({type: "success", message: "Success data fetching"}))
            return response.data
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

export const sendCodesAgain = createAsyncThunk(
    "sendCodesAgain", async (
        {order_id, email}: { order_id: string, email: string | undefined }, {dispatch}
    ) => {
        try {
            const response = await orderAPI.sendCodesAgain(order_id, email)
            dispatch(setStatus({type: "success", message: "Codes send successfully"}))
            return response.data
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

export const orderCancellation = createAsyncThunk(
    "orderCancellation", async (order_id: string, {dispatch}) => {
        try {
            const response = await orderAPI.orderCancellation(order_id)
            dispatch(setStatus({type: "success", message: "Transaction was canceled successful"}))
            return {order_id, data: response.data}
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

const ordersSlice = createSlice({
    name: "monitoringTable",
    initialState,
    reducers: {},
    extraReducers: {
        [getOrders.fulfilled.type]: (state, action: PayloadAction<Array<GetOrdersType>>) => {
            return action.payload
        },
        [orderCancellation.fulfilled.type]: (state, action) => {
            const foundOrder = state.find(item => item.order["0"].order_id === action.payload.order_id)
            foundOrder!.order["0"].isCanceled = action.payload.data
        }
    }
})

export default ordersSlice.reducer;