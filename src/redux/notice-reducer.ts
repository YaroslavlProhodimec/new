

const initialState: initialStateType = {
    loading:'loading',
    error: null
}
type initialStateType = {
    loading:'loading' | 'succeeded'
    error: string | null
}


export const noticeReducer = (state: initialStateType = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'LOADING':

            return {
                ...state,
                loading: action.loading
            }
        case 'APP/SET-ERROR':
            return {...state, error: action.error}

        default:
            return {...state}
    }
}


export const loaderAC = (loading: string) => ({type: 'LOADING', loading} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>

export type loaderACType = ReturnType<typeof loaderAC>
type ActionsType =
    | loaderACType
    | SetAppErrorActionType
