import {createSlice} from "@reduxjs/toolkit";

export type MessageTemplatesTableItemType = {
    key: string
    id: string
    nazwaSzablonu: string
}

export type MessageTemplatesTableStateType = Array<MessageTemplatesTableItemType>

const initialState: MessageTemplatesTableStateType = [
    {
        key: "1",
        id: "1",
        nazwaSzablonu: "konta euw"
    }, {
        key: "2",
        id: "2",
        nazwaSzablonu: "konta eune"
    },
    {
        key: "3",
        id: "3",
        nazwaSzablonu: "konta PBE"
    }, {
        key: "4",
        id: "4",
        nazwaSzablonu: "konta TR BE"
    }
]

const messageTemplatesTableSlice = createSlice({
    name: "MessageTemplatesTable",
    initialState,
    reducers: {}
})

export default messageTemplatesTableSlice.reducer;