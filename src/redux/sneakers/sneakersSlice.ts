import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchSneakers} from "./asyncActions";
import {SneakerItem} from "../basket/types";




export enum Status {
    LOADING ='loading',
    SUCCESS = 'success',
    ERROR = 'error'
}
interface SneakersSliceState {
    items:SneakerItem[]
    isLoading:Status
}
export const initialState:SneakersSliceState = {
    items: [],
    isLoading: Status.LOADING
}


// @ts-ignore
const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState,
    reducers: {
        setItems(state, action:PayloadAction<SneakerItem[]>) {
            state.items = action.payload
        },

    },
    extraReducers:(builder) =>{
        builder.addCase(fetchSneakers.pending,(state,action)=> {
            state.isLoading = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchSneakers.fulfilled,(state,action)=> {
            state.isLoading = Status.SUCCESS
            state.items = action.payload
        })
        builder.addCase(fetchSneakers.rejected,(state,action)=> {
            state.isLoading = Status.ERROR
            state.items = []
        })
    }


})
export const {setItems,} = sneakersSlice.actions

export default sneakersSlice.reducer