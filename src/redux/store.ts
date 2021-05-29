import {combineReducers, configureStore} from "@reduxjs/toolkit";
import messageTemplatesTableSlice from "./messageTemplatesTable.reducer";
import relatedAccountsTableSlice from './relatedAccountsTable.reducer';
import paymentsHistoryTableSlice from './paymentsHistoryTable.reducer';
import codeDatabaseTableSlice from "./codeDatabaseTable.reducer";
import transactionTableSlice from "./transactionTable.reducer"
import monitoringTableSlice from './monitoringTable.reducer';
import customersSlice from './customers.reducer';
import sidebarSlice from "./sidebar.reducer";
import appSlice from './app.reducer';
import meSlice from './me.reducer';

const rootReducer = combineReducers({
    messageTemplatesTable: messageTemplatesTableSlice,
    relatedAccountsTable: relatedAccountsTableSlice,
    paymentsHistoryTable: paymentsHistoryTableSlice,
    codeDatabaseTable: codeDatabaseTableSlice,
    transitionTable: transactionTableSlice,
    monitoringTable: monitoringTableSlice,
    customers: customersSlice,
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