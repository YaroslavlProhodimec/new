import {calcTotalPrice} from "./calcTotalPrice";

export const getSneakersFromLS = ()=> {
    const data = localStorage.getItem('sneakers')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)

        return {
            items,
            totalPrice
        }
    }
