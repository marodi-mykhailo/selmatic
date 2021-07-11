import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appAPI, codeDatabaseAPI} from "../api/app.api";
import {setStatus} from "./app.reducer";
import {newCodeDatabase} from "../pages/CodeDatabase/NewCodeDatabase/NewCodeDatabase";

export type CodeDatabaseItemType = {
    id: number
    offer_id: string
    db_id: string
    db_type: string
    db_name: string
    code: string
    seller_id: number
    created_at: string
    updated_at: string
}

export type CodeDatabaseStateType = {
    codeDatabases: Array<CodeDatabaseItemType>
    strippedDownCodeDatabase: Array<{
        id: string
        name: string
    }>
}

const initialState: CodeDatabaseStateType = {
    codeDatabases: [],
    strippedDownCodeDatabase: [{
        id: "",
        name: ""
    }]
}

export const getCodeDatabase = createAsyncThunk(
    "get_code_database",
    async (params, {dispatch}) => {
        try {
            const response = await codeDatabaseAPI.getAllCodes()
            dispatch(setStatus({type: "success", message: "Success data fetching"}))
            return response.data
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

export const addNewCodeDatabase = createAsyncThunk(
    "add_new_codeDatabase",
    async (newCodeDatabase: newCodeDatabase, {dispatch}) => {
        try {
            const response = await codeDatabaseAPI.addNewCode(newCodeDatabase)
            dispatch(setStatus({type: "success", message: "Success data fetching"}))
            return response.data
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

export const getCodeDatabaseNames = createAsyncThunk(
    "add_codeDatabase_names",
    async (params, {dispatch}) => {
        try {
            const response = await codeDatabaseAPI.getCodeDatabaseNames()
            return response.data
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

const codeDatabaseSlice = createSlice({
    name: "codeDatabase",
    initialState,
    reducers: {
        deleteItemFromCodeDatabase(state, {payload}: PayloadAction<number>) {
            return {
                ...state,
                codeDatabases: state.codeDatabases.filter(item => item.id !== payload)
            }
        }
    },
    extraReducers: {
        [getCodeDatabase.fulfilled.type]: (state, action: PayloadAction<Array<CodeDatabaseItemType>>) => {
            return {...state, codeDatabases: action.payload}
        },
        [getCodeDatabase.rejected.type]: (state) => {
            return {...state, codeDatabases: []}
        },
        [getCodeDatabaseNames.fulfilled.type]: (state, action: PayloadAction<Array<{ id: string; name: string }>>) => {
            return {...state, strippedDownCodeDatabase: action.payload}
        }
    }
})

export default codeDatabaseSlice.reducer;

export const {deleteItemFromCodeDatabase} = codeDatabaseSlice.actions;