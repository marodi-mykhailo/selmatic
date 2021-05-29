import {createSlice} from "@reduxjs/toolkit";

export type PaymentsStatusType = "rozpoczęta" | "odzrzucona" | "zaakceptowana"

export type PaymentsHistoryItemType = {
    key: string
    id: string
    date: string
    amount: string
    credits: number
    status: PaymentsStatusType
    information: string
}

export type PaymentsHistoryTableType = PaymentsHistoryItemType[]

const initialState: PaymentsHistoryTableType = [
    {
        key: "1",
        id: "1",
        date: "09/05/2021 20:43",
        amount: "75 PLN",
        credits: 1000,
        status: "rozpoczęta",
        information: "Doladowanie hurtowe"
    },{

        key: "2",
        id: "2",
        date: "09/05/2021 20:43",
        amount: "75 PLN",
        credits: 1000,
        status: "odzrzucona",
        information: "Doladowanie hurtowe"
    },{

        key: "3",
        id: "3",
        date: "09/05/2021 20:43",
        amount: "75 PLN",
        credits: 1000,
        status: "zaakceptowana",
        information: "Doladowanie hurtowe"
    }
]

const paymentsHistoryTableSlIce = createSlice({
    name: "payment",
    initialState,
    reducers: {}
})

export default paymentsHistoryTableSlIce.reducer;