import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type MessageTemplatesItemType = {
    key: string
    id: number
    nazwaSzablonu: string
}

export type MessageTemplatesStateType = Array<MessageTemplatesItemType>

const initialState: MessageTemplatesStateType = [
    {
        key: "1",
        id: 1,
        nazwaSzablonu: "konta euw"
    }, {
        key: "2",
        id: 2,
        nazwaSzablonu: "konta eune"
    },
    {
        key: "3",
        id: 3,
        nazwaSzablonu: "konta PBE"
    }, {
        key: "4",
        id: 4,
        nazwaSzablonu: "konta TR BE"
    }
]

const messageTemplatesSlice = createSlice({
    name: "MessageTemplatesTable",
    initialState,
    reducers: {
        deleteItemFromMessageTemplate(state, {type, payload}: PayloadAction<number>) {
            console.log("type", type)
            return state.filter(item => item.id !== payload)
        }
    }
})

export default messageTemplatesSlice.reducer;

export const {deleteItemFromMessageTemplate} = messageTemplatesSlice.actions;