import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice:0,
    items:[]
}

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers: {
        addItem(state:any,action){
            const findItem = state.items.find((el:any) => el.id === action.payload.id)
            if(findItem) {
                 findItem.quantity++
            } else  {
                    state.items.push({...action.payload,quantity:1});
            }
               state.totalPrice = state.items.reduce((sum: any, el: any) => {
                   return sum + (el.price * el.quantity)
               }, 0);


        },
        removeItem(state,action){
            state.items = state.items.filter((el:any)=>el.id !== action.payload)

        },
        clearItem(state){
            state.items = []
            state.totalPrice = 0
        }
    }
})
export const selectorBasket = (state:any) => (state.basket.totalPrice)
export const selectorItems = (state:any) => (state.basket.items.length)
export const {addItem,
    removeItem,
    clearItem} = basketSlice.actions

export default basketSlice.reducer