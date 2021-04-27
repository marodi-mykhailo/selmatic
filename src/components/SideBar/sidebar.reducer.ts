export type SidebarReducerStateType = {
    isCollapsed: boolean
}

const initialState: SidebarReducerStateType = {
    isCollapsed: false
}

export const sidebarReducer = (state = initialState, action: ActionsType): SidebarReducerStateType => {
    switch (action.type) {
        case "SIDEBAR/SET-IS-COLLAPSED":
            return {...state, isCollapsed: action.status}
        default:
            return state
    }
}


export const setIsCollapsedAC = (status: boolean) => ({
    type: "SIDEBAR/SET-IS-COLLAPSED", status
} as const)

type ActionsType = ReturnType<typeof setIsCollapsedAC>