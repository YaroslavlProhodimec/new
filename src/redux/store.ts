import {AnyAction} from 'redux'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import filter from './slices/filterSlice'
import basket from './slices/basketSlice'
import sneakers from './slices/sneakersSlice'


export const store = configureStore({
  reducer:{
      filter,
      basket,
      sneakers
  }

})
export type RootState = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<any, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<any> = useSelector

// а это, чтобы можно было в консоли браузера обращаться к redux в любой момент
// @ts-ignore
window.store = store;
