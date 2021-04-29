import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import sidebarReducer from "../components/SideBar/sidebar.reducer";

const rootReducer = combineReducers({
    sidebar: sidebarReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;