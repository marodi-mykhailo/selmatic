import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appAPI, offerAPI} from "../api/app.api";
import {setStatus} from "./app.reducer";

export type OfferType = {
    id: number
    seller_id: string
    offer_id: string
    offer_name: string
    stock_available: string
    stock_sold: string
    sold_last_30d: string
    price_amount: string
    price_currency: string
    platform: string
    status_platform: string
    startedAt: string
    endingAt: string
    endedAt: string
    is_active: string
    created_at: string
    updated_at: string
}

export const getOffers = createAsyncThunk(
    "get_offers",
    async (params, {dispatch}) => {
        try {
            const response = await appAPI.getOffers()
            dispatch(setStatus({type: "success", message: "Success data fetching"}))
            return response.data
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

export const changeOfferIsActive = createAsyncThunk(
    'change_is_active',
    async (offerId: string, {dispatch, rejectWithValue}) => {
        try {
            const response = await offerAPI.changeIsActive(offerId)
            const {is_active} = await response.data;
            return {
                id: offerId,
                is_active
            } as { id: string, is_active: string }
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            return rejectWithValue(e.message)
        }
    }
)
const initialState: Array<OfferType> = []

const offersSlice = createSlice({
    name: "offers",
    initialState,
    reducers: {
        changeOfferIsActive(state, {type, payload}: PayloadAction<{ id: number, is_active: string }>) {

        }
    },
    extraReducers: {
        [getOffers.fulfilled.type]: (state, action: PayloadAction<Array<OfferType>>) => {
            return [...action.payload]
        },
        [getOffers.rejected.type]: (state, action: PayloadAction<Array<OfferType>>) => {
            return []
        },
        [changeOfferIsActive.fulfilled.type]: (state, {payload}: PayloadAction<{ id: string, is_active: string }>) => {
            let index = state.findIndex(item => item.offer_id === payload.id)
            state[index].is_active = payload.is_active
        }
    }
})

export default offersSlice.reducer;