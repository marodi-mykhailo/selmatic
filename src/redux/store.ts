import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "../components/SideBar/sidebar.reducer";
import transactionTableSlice from "../components/TransactionTable/transactionTable.reducer"
import messageTemplatesTableSlice from "../components/MessageTemplatesTable/messageTemplatesTable.reducer";

const rootReducer = combineReducers({
    sidebar: sidebarSlice,
    transitionTable: transactionTableSlice,
    messageTemplatesTable: messageTemplatesTableSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;