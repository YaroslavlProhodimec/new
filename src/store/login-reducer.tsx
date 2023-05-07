import {Dispatch} from "redux";
import {authAPI} from "../api/api-login";

const initialState: any = {
    login: false
}
type initialStateType = typeof initialState


export const loginReducer = (state: initialStateType = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'SIGN-IN' :
            return {
                ...state,
                login: action.login
            }


        default:
            return {...state}
    }
}


export const signInAC = (login: boolean) => ({type: 'SIGN-IN', login} as const)

export type signInACACType = ReturnType<typeof signInAC>
export const loginTC = (data: any) => (dispatch: Dispatch<ActionsType>) => {

          authAPI.login(data).then(() => {
            dispatch(signInAC(true))
        }
    )

}


type ActionsType =
    | signInACACType
