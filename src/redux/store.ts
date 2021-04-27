import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "../components/SideBar/sidebar.reducer";

const rootReducer = combineReducers({
    sidebar: sidebarReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;