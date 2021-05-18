import {combineReducers, configureStore} from "@reduxjs/toolkit";
import messageTemplatesTableSlice from "./messageTemplatesTable.reducer";
import relatedAccountsTableSlice from './relatedAccountsTable.reducer';
import codeDatabaseTableSlice from "./codeDatabaseTable.reducer";
import transactionTableSlice from "./transactionTable.reducer"
import monitoringTableSlice from './monitoringTable.reducer';
import customersTableSlice from './customersTable.reducer';
import sidebarSlice from "./sidebar.reducer";
import appSlice from './app.reducer';
import meSlice from './me.reducer';

const rootReducer = combineReducers({
    messageTemplatesTable: messageTemplatesTableSlice,
    relatedAccountsTable: relatedAccountsTableSlice,
    codeDatabaseTable: codeDatabaseTableSlice,
    transitionTable: transactionTableSlice,
    monitoringTable: monitoringTableSlice,
    customersTable: customersTableSlice,
    sidebar: sidebarSlice,
    app: appSlice,
    me: meSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;