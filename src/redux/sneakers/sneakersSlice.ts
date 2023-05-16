import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchSneakers} from "./asyncActions";
import {SneakerItem} from "../basket/basketSlice";

interface SneakersSliceState {
    items:SneakerItem[]
    isLoading:'loading' | 'succeeded'
}
export const initialState:SneakersSliceState = {
    items: [],
    isLoading: 'loading'
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
            state.isLoading = 'loading'
            state.items = []
        })
        builder.addCase(fetchSneakers.fulfilled,(state,action)=> {
            state.isLoading = 'succeeded'
            state.items = action.payload
        })
        builder.addCase(fetchSneakers.rejected,(state,action)=> {
            state.isLoading = 'succeeded'
            state.items = []
        })
    }


})
export const {setItems,} = sneakersSlice.actions

export default sneakersSlice.reducer