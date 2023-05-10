import {Dispatch} from "redux";
import {authAPI} from "../api/api-login";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";

const initialState: any = {
    login: false
}
type initialStateType = typeof initialState


export const loginReducer = (state: initialStateType = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'SIGN-IN' :
            console.log(action.login)
            return {

                ...state,
                login: action.login
            }


        default:
            return {...state}
    }
}


export const signInAC = (login: boolean) => ({type: 'SIGN-IN', login} as const)

export type signInACType = ReturnType<typeof signInAC>
export const loginTC = (data: any) => (dispatch: Dispatch<ActionsType>) => {

          authAPI.login(data).then(res => {
              console.log(res)
              if (res.data.resultCode === 0) {
                  dispatch(signInAC(true))
              } else {
                  const action = signInAC(false)
                  dispatch(action)
                  handleServerAppError(res.data, dispatch);
              }
          })
              .catch((error) => {
                  const action = signInAC(false)
                  dispatch(action)
                  handleServerNetworkError(error, dispatch);
              })

}



type ActionsType =
    | signInACType
