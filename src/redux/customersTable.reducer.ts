import {createSlice} from "@reduxjs/toolkit";

type CustomersTableItemType = {
    key: string
    id: string
    username: string
    firstLastName: string
    city: string
    email: string
}

export type CustomersTableType = Array<CustomersTableItemType>

const initialState: CustomersTableType = [{
    key: "1",
    id: "1",
    username: "Client5432432",
    firstLastName: "Dawid Skora",
    city: "Łodz",
    email: "test@test.com"
},{
    key: "2",
    id: "2",
    username: "Client5432432",
    firstLastName: "Dawid Skora",
    city: "Łodz",
    email: "test@test.com"
},{
    key: "3",
    id: "3",
    username: "Client5432432",
    firstLastName: "Dawid Skora",
    city: "Łodz",
    email: "test@test.com"
},{
    key: "4",
    id: "4",
    username: "Client5432432",
    firstLastName: "Dawid Skora",
    city: "Łodz",
    email: "test@test.com"
},{
    key: "5",
    id: "5",
    username: "Client5432432",
    firstLastName: "Dawid Skora",
    city: "Łodz",
    email: "test@test.com"
}]

const customersTableSlice = createSlice({
    name: "customersTable",
    initialState,
    reducers: {}
})


export default customersTableSlice.reducer;