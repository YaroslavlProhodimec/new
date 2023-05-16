import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


export type SneakerItem = {
    id: string,
    image: string,
    name: string
    style?: string
    price: number
    quantity: number
    category?: number
    rating?: number
}
interface basketSliceState {
    totalPrice:number
    items:SneakerItem[]
}
const initialState:basketSliceState = {
    totalPrice:0,
    items:[]
}

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers: {
        addItem(state,action:PayloadAction<SneakerItem>){
            const findItem = state.items.find((el:any) => el.id === action.payload.id)
            if(findItem ) {
                 findItem.quantity++
            } else  {
                    state.items.push({...action.payload,quantity:1});
            }
               state.totalPrice = state.items.reduce((sum: any, el: any) => {
                   return sum + (el.price * el.quantity)
               }, 0);
            },
        removeItem(state,action:PayloadAction<SneakerItem>){
            state.items = state.items.filter((el:any)=>el.id !== action.payload)
            state.totalPrice = state.items.reduce((sum: any, el: any) => {
                return sum + (el.price * el.quantity)
            }, 0);
            },
        clearItem(state){
            state.items = []
            state.totalPrice = 0
        }
    }
})
export const selectorBasket = (state:RootState) => (state.basket)
export const selectorItems = (state:RootState) => (state.basket.items.length)
export const {addItem,
    removeItem,
    } = basketSlice.actions

export default basketSlice.reducer