import {AnyAction} from 'redux'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import filter from './filter/filterSlice'
import basket from './basket/basketSlice'
import sneakers from './sneakers/sneakersSlice'
import login from './login/loginSlice'



export const store = configureStore({
  reducer:{
      filter,
      basket,
      sneakers,
      login,
  }

})
export type RootState = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<any, any, AnyAction>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<any> = useSelector

// а это, чтобы можно было в консоли браузера обращаться к redux в любой момент
// @ts-ignore
window.store = store;
