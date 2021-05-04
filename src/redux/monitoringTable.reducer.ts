import {createSlice} from "@reduxjs/toolkit";

type monitoringTableItemType = {
    key: string
    id: string
    nazwaAukcji: string
    startAukcji: string
    koniecAukcji: string
}

export type monitoringTableType = Array<monitoringTableItemType>

const initialState: monitoringTableType = [
    {
        key: "1",
        id: "1",
        nazwaAukcji: "LOL Unranked 10k",
        startAukcji: "04/09/2021 21:10",
        koniecAukcji: "Do wyczerpania zapasów"
    }, {
        key: "2",
        id: "2",
        nazwaAukcji: "LOL Unranked 20k",
        startAukcji: "04/09/2021 21:10",
        koniecAukcji: "Do wyczerpania zapasów"
    }, {
        key: "3",
        id: "3",
        nazwaAukcji: "LOL Unranked 30k",
        startAukcji: "04/09/2021 21:10",
        koniecAukcji: "Do wyczerpania zapasów"
    }, {
        key: "4",
        id: "4",
        nazwaAukcji: "LOL Unranked 40k",
        startAukcji: "04/09/2021 21:10",
        koniecAukcji: "Do wyczerpania zapasów"
    }, {
        key: "5",
        id: "5",
        nazwaAukcji: "LOL Unranked 50k",
        startAukcji: "04/09/2021 21:10",
        koniecAukcji: "Do wyczerpania zapasów"
    },
]

const monitoringTableSlice = createSlice({
    name: "monitoringTable",
    initialState,
    reducers: {}
})

export default monitoringTableSlice.reducer;