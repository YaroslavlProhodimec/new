

const initialState: initialStateType = {
    loading:'loading'
}
type initialStateType = {
    loading:'loading' | 'succeeded'
}


export const loaderReducer = (state: initialStateType = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'LOADING':

            return {
                ...state,
                loading: action.loading
            }


        default:
            return {...state}
    }
}


export const loaderAC = (loading: string) => ({type: 'LOADING', loading} as const)

export type loaderACType = ReturnType<typeof loaderAC>
type ActionsType =
    | loaderACType
