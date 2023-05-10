import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSneakers = createAsyncThunk('sneakers/items',async ()=> {
    const res = await axios.get(`https://64542d14c18adbbdfeb0f6bc.mockapi.io/items`)
    return res.data
    }

)
export const initialState = {
items:[],
    isLoading:'loading' | 'succeeded'
}


// @ts-ignore
const sneakersSlice = createSlice({
    name:'sneakers',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },

    },
        extraReducers:{
            [fetchSneakers.pending]:(state)=>{
                state.isLoading = 'loading'
                state.items=[]
            },
            [fetchSneakers.fulfilled]:(state,action)=>{
                state.isLoading = 'succeeded'
                state.items =  action.payload
            },
            [fetchSneakers.rejected]:(state,action)=>{
                state.isLoading = 'succeeded'
                state.items=[]
            }
        }

})
export const {setItems,} = sneakersSlice.actions

export default sneakersSlice.reducer