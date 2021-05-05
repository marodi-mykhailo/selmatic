import {createSlice} from "@reduxjs/toolkit";

type CodeDatabaseTableItemType = {
    key: string
    id: string
    nazwaBazy: string
    dataDodania: string
    codesCount: string
    soldCount: string
    leftCount: string
    typBazy: string /// dopisać typy
}

export type CodeDatabaseTableType = Array<CodeDatabaseTableItemType>

const initialState: CodeDatabaseTableType = [
    {
        key: "1",
        id: "1",
        nazwaBazy: "Konta TR BE",
        dataDodania: "20/11/2019 12:35",
        codesCount: "91",
        soldCount: "88",
        leftCount: "3",
        typBazy: "Zwykła"
    }, {
        key: "2",
        id: "2",
        nazwaBazy: "euw 40 k",
        dataDodania: "20/11/2019 12:35",
        codesCount: "1974",
        soldCount: "1970",
        leftCount: "4",
        typBazy: "Zwykła"
    }, {
        key: "3",
        id: "3",
        nazwaBazy: "RU 40k",
        dataDodania: "20/11/2019 12:35",
        codesCount: "122",
        soldCount: "118",
        leftCount: "4",
        typBazy: "Zwykła"
    }, {
        key: "4",
        id: "4",
        nazwaBazy: "eune 40k",
        dataDodania: "20/11/2019 12:35",
        codesCount: "517",
        soldCount: "513",
        leftCount: "4",
        typBazy: "Zwykła"
    }, {
        key: "5",
        id: "5",
        nazwaBazy: "Konta NA BE",
        dataDodania: "20/11/2019 12:35",
        codesCount: "79",
        soldCount: "74",
        leftCount: "5",
        typBazy: "Zwykła"
    },
]

const codeDatabaseTableSlice = createSlice({
    name: "codeDatabaseTable",
    initialState,
    reducers: {}
})

export default codeDatabaseTableSlice.reducer;