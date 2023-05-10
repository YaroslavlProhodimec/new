import {appAPI} from "../api/api-products";
import {loaderAC} from "./notice-reducer";



const initialState: any = {
    products: [],
    currentPage: 1
}
export const productsReducer = (state: any = initialState, action: ActionsType):any => {
    switch (action.type) {
        case 'APP/SET-PRODUCTS' :
            return {
                ...state,
                products:  action.products,
            }

        case 'CATEGORY-PRODUCTS' :
            return {
                ...state,
                products: action.category}
        case 'PAGE-PRODUCTS' :
            return {...state,

                products:action.viewPageProducts
            }
        case 'SET-CURRENT-PAGES':
            return {...state, currentPage: action.currentPage}

        default:
            return {...state}
    }
}

export type ProductsType = {
    id: string
    image?:any
    name:string
    style:string
    price:number
    qualification:number
    quantity:number
}

export const getPropductsAC = (products:any) => ({type: 'APP/SET-PRODUCTS', products} as const)
export const categoryProductsAC = (category:any) => ({type: 'CATEGORY-PRODUCTS', category} as const)
export const pagesProductsAC = (viewPageProducts:any) => ({type: 'PAGE-PRODUCTS', viewPageProducts} as const)
export const setCurrentPagesAC= (currentPage: number) => ({type: 'SET-CURRENT-PAGES', currentPage} as const)

export const fetchProductsTC = () => (dispatch:any) => {
    dispatch(loaderAC('loading'))
      appAPI.app().then((res)=> {
            dispatch(getPropductsAC(res.data))
        dispatch(loaderAC('succeeded'))
        }
    )

}
export const categoryProductsTC = (id:number) => (dispatch:any) => {
    dispatch(loaderAC('loading'))

    appAPI.category(id).then((res)=> {
            dispatch(categoryProductsAC(res.data))
            dispatch(loaderAC('succeeded'))
        }
    )

}
export const pagesProductsTC = (id:number) => (dispatch:any) => {
    dispatch(loaderAC('loading'))
    appAPI.pages(id).then((res:  any)=> {
            dispatch(pagesProductsAC(res.data))
        dispatch(setCurrentPagesAC(id))
            dispatch(loaderAC('succeeded'))
        }
    )
}


export type getPropductsACType = ReturnType<typeof getPropductsAC>
export type categoryPropductsACType = ReturnType<typeof categoryProductsAC>
export type pagesPropductsACType = ReturnType<typeof pagesProductsAC>
export type setCurrentPagesACType = ReturnType<typeof setCurrentPagesAC>

type ActionsType =
    | getPropductsACType
    | categoryPropductsACType
    | pagesPropductsACType
    | setCurrentPagesACType

// [
//     {
//         "id": 0,
//         "image": "http://85.10.195.138/adidasBrown.png",
//         "name": "ВайШоЗаТяги",
//         "price": 5500,
//         "quantity": 0,
//         "category": 2
//     },
//     {
//         "id": 1,
//         "image": "https://drive.google.com/file/d/1lm4dGhefL83vA_ijppncP2k8_Wty_sct/view?usp=share_link",
//         "name": "Бешенки",
//         "price": 11500,
//         "quantity": 0,
//         "category": 3
//     },
//     {
//         "id": 2,
//         "image": "https://drive.google.com/file/d/10Va6Vgp4Ht6S-IAJimxntfDJizQFuHat/view?usp=share_link",
//         "name": "Воздуханки",
//         "price": 7500,
//         "quantity": 0,
//         "category": 3
//     },
//     {
//         "id": 3,
//         "image": "https://drive.google.com/file/d/1UUVzCwNh08-JG7kQbncWXJ31VPjTwENy/view?usp=share_link",
//         "name": "Розовая-LADY",
//         "price": 17500,
//         "quantity": 0,
//         "category": 2
//     },
//     {
//         "id": 4,
//         "image": "https://drive.google.com/file/d/1BPR9DlpVA3A1VWVaFu9WC4i-RfZjR8xh/view?usp=share_link",
//         "name": "ХулиганкиНеМестные",
//         "price": 97500,
//         "quantity": 0,
//         "category": 3
//     },
//     {
//         "id": 5,
//         "image": "https://drive.google.com/file/d/1IKZCbvH3eVa2Oow7eY8QVYGOPFJYBCo9/view?usp=share_link",
//         "name": "Подкрадули",
//         "price": 3600,
//         "quantity": 0,
//         "category": 3
//     },
//     {
//         "id": 6,
//         "image": "https://drive.google.com/file/d/1U5eIn1WC72RwFxNRXUao3cJVe3sXK-ri/view?usp=share_link",
//         "name": "КтоТыВоин",
//         "price": 43600,
//         "quantity": 0,
//         "category": 3
//     },
//     {
//         "id": 7,
//         "image": "https://drive.google.com/file/d/1uk4bC0Ay8MtAeaU06WZkU1O5KaBtno0S/view?usp=share_link",
//         "name": "GRANDMOTHER-STYLE",
//         "price": 9900,
//         "quantity": 0,
//         "category": 2
//     },
//     {
//         "id": 8,
//         "image": "https://drive.google.com/file/d/1PzHQVHyOMrPs1j-W4e3VjYEN0SmzYVSW/view?usp=share_link",
//         "name": "Бомбовые-вездеходки",
//         "price": 55500,
//         "quantity": 0,
//         "category": 2
//     }
// ]