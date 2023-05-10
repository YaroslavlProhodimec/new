import React, {useEffect, useState} from 'react';
import {Header} from "./header/Header";
import {Container} from "@mui/material";
import {Main} from "./main/Main";
import s from "./Base.module.css";
import styleSelect from "./main/category/select/Select.module.css";
import Basket from "./main/basket/Basket";
import basket from "./main/basket/Basket";
import {addPropductsAC} from "../redux/basket-reducer";
import {Snack} from "./footer/snack/Snack";
import {NavLink, useSearchParams} from "react-router-dom";
import {Sort,} from "./main/category/select/Select";
import Box from '@mui/material/Box';
import {Skeleton} from "./skeleton/Skeleton";
import {SuperPagination} from "./footer/pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {setCategoryId} from "../redux/slices/filterSlice";
import {removeItem} from "../redux/slices/basketSlice";
import {fetchSneakers} from "../redux/slices/sneakersSlice";

const BaseContainer = () => {
    const sneakers = useAppSelector(state => state.sneakers.items)
    const loading = useAppSelector(state => state.sneakers.isLoading)
// const sortType =sort.sortProperty
    const dispatch = useAppDispatch()

    const onChangeCategory = (id:number) => {
        dispatch(setCategoryId(id))
    }
    const removeBasket = (id: string) => {
        dispatch(removeItem(id))
    }
    const addBasket = (id: string, name: string, price: number, quantity: number) => {
        dispatch(addPropductsAC(id, name, price, quantity))
    }
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const postQwery = searchParams.get('post') || '';

    useEffect(() => {
        dispatch(fetchSneakers())
    }, [])

// if(!login) {
//     return <Navigate to={'/login'}/>
// }
//     console.log(sneakers)
    return (
        <div className={s.baseContainer}>
            <Header postQwery={postQwery} searchParams={searchParams} setSearchParams={setSearchParams}

                    openBasket={() => setOpen(true)}/>
            <Sort className={styleSelect.select}/>

            <Container sx={{mt: '1rem',}}>
                {/*<Category/>*/}

                <main className={s.mainContainer}>
                    {loading === 'loading' ?
                        [...new Array(9)].map((_, index) =>
                            <Box sx={{m: '6px'}}>
                                <Skeleton key={index}/>
                            </Box>
                        )

                        :

                        sneakers.filter((el: {
                            name: string;
                        }) => el.name.toLowerCase().includes(postQwery.toLowerCase()))
                            .map((el: any) =>

                                <Box key={el.id} sx={{m: '6px'}}>


                                        <Main setAlert={() => setAlert(true)} addBasket={addBasket}  {...el}/>
                                </Box>
                            )}
                </main>
                <SuperPagination/>
            </Container>
            <Basket removeBasket={removeBasket}  open={open} closeCart={() => setOpen(false)}/>
            <Snack onClose={() => setAlert(false)} isOpen={alert}/>

        </div>
    );
};

export default BaseContainer;