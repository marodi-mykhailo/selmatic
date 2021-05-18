import {createSlice} from "@reduxjs/toolkit";

type RelatedAccountsTableItemType = {
    key: string
    id: string
    login: string
    addedData: string
    status: string
    lastCheckDate: string
}

export type RelatedAccountsTableType = RelatedAccountsTableItemType[]

const initialState: RelatedAccountsTableType = [{
    key: "1",
    id: "1",
    login: "abc-league",
    addedData: "06/10/2000 10:57",
    status: "OK",
    lastCheckDate: "06/10/2000 10:57"
}, {
    key: "2",
    id: "2",
    login: "account-factory",
    addedData: "06/10/2000 10:57",
    status: "OK",
    lastCheckDate: "06/10/2000 10:57"
}]

const relatedAccountsTableSlice = createSlice({
    name: "relatedAccountsTable",
    initialState,
    reducers: {}
})

export default relatedAccountsTableSlice.reducer;