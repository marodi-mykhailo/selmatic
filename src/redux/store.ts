import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "./sidebar.reducer";
import transactionTableSlice from "./transactionTable.reducer"
import messageTemplatesTableSlice from "./messageTemplatesTable.reducer";
import codeDatabaseTableSlice from "./codeDatabaseTable.reducer";
import monitoringTableSlice from './monitoringTable.reducer';
import customersTableSlice from './customersTable.reducer';
import appSlice from './app.reducer';

const rootReducer = combineReducers({
    sidebar: sidebarSlice,
    transitionTable: transactionTableSlice,
    messageTemplatesTable: messageTemplatesTableSlice,
    codeDatabaseTable: codeDatabaseTableSlice,
    monitoringTable: monitoringTableSlice,
    customersTable: customersTableSlice,
    app: appSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;