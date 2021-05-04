import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "../components/SideBar/sidebar.reducer";
import transactionTableSlice from "./transactionTable.reducer"
import messageTemplatesTableSlice from "./messageTemplatesTable.reducer";
import codeDatabaseTableSlice from "./codeDatabaseTable.reducer";
import monitoringTableSlice from './monitoringTable.reducer';

const rootReducer = combineReducers({
    sidebar: sidebarSlice,
    transitionTable: transactionTableSlice,
    messageTemplatesTable: messageTemplatesTableSlice,
    codeDatabaseTable: codeDatabaseTableSlice,
    monitoringTable: monitoringTableSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;