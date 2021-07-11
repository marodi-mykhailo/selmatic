import {createSlice} from "@reduxjs/toolkit";

export type TransitionTableItemType = {
    key: string
    id: string
    auction: string
    codeShippingStatus: string,
    platform: string
    client: string
    count: string
    pricePerItem: string
    dateOfPurchase: string
    paymentStatus: string
    payUTransactionCompletionDate: string
    codeShipmentDate: string
    sentCodes: string[]

}

export type TransitionTableReducerStateType = Array<TransitionTableItemType>

const initialState: TransitionTableReducerStateType = []

const transactionTableSlice = createSlice({
    name: "transactionTable",
    initialState,
    reducers: {}
})

export default transactionTableSlice.reducer;