import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import sidebarSlice from "../components/SideBar/sidebar.reducer";
import transactionTableSlice from "../components/TransactionTable/transactionTable.reducer"

const rootReducer = combineReducers({
    sidebar: sidebarSlice,
    transitionTable: transactionTableSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;