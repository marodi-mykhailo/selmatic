import {combineReducers, configureStore} from "@reduxjs/toolkit";
import messageTemplatesTableSlice from "./messageTemplatesTable.reducer";
import relatedAccountsTableSlice from './relatedAccountsTable.reducer';
import paymentsHistoryTableSlice from './paymentsHistoryTable.reducer';
import transactionTableSlice from "./transactionTable.reducer"
import codeDatabaseSlice from "./codeDatabase.reduce";
import statisticsSlice from './statisctics.reducer';
import customersSlice from './customers.reducer';
import sidebarSlice from "./sidebar.reducer";
import ordersSlice from './orders.reducer';
import offersSlice from './offers.reducer';
import appSlice from './app.reducer';
import meSlice from './users.reducer';

const rootReducer = combineReducers({
    messageTemplatesTable: messageTemplatesTableSlice,
    relatedAccountsTable: relatedAccountsTableSlice,
    paymentsHistoryTable: paymentsHistoryTableSlice,
    transitionTable: transactionTableSlice,
    codeDatabase: codeDatabaseSlice,
    statistics: statisticsSlice,
    customers: customersSlice,
    sidebar: sidebarSlice,
    orders: ordersSlice,
    offers: offersSlice,
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