import React, {useEffect, useState} from 'react';
import {Header} from "./header/Header";
import {Container} from "@mui/material";
import {Main} from "./main/Main";
import s from "./Base.module.css";
import styleSelect from "./main/category/sort/Sort.module.css";
import Basket from "./main/basket/Basket";
import {Snack} from "./footer/snack/Snack";
import {Navigate, useSearchParams} from "react-router-dom";
import {Sort,} from "./main/category/sort/Sort";
import Box from '@mui/material/Box';
import {Skeleton} from "./skeleton/Skeleton";
import {SuperPagination} from "./footer/pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {setSearchValue} from "../redux/filter/filterSlice";
import {removeItem} from "../redux/basket/basketSlice";
import {selectFilter} from "../redux/filter/selectors";
import {fetchSneakers} from "../redux/sneakers/asyncActions";
import {selectSneakers} from "../redux/sneakers/selectors";


const BaseContainer = () => {
    const {items,isLoading} = useAppSelector(selectSneakers)
    const login = useAppSelector(state => state.login.isInitialzed)
    const { categoryId, sort, currentPage,searchValue  } = useAppSelector(selectFilter)
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()

    const onChangeText = (value: string) => {
        const findQuery: { find?: string } = value ? {find: value} : {} // если нет - то не записывать в урл
        const {find, ...lastQueries} = Object.fromEntries(searchParams)
        setSearchParams({...lastQueries, ...findQuery})

    }
    const removeBasket = (id: string) => {
        dispatch(removeItem(id))
    }
    const getPizzas = async () => {
        const sortBy = sort.sortProperty
        const order = sort.sortProperty
        const params = Object.fromEntries(searchParams)
        dispatch(setSearchValue(params.find || ''))
        dispatch(
            fetchSneakers({
                sortBy,
                order,
                currentPage:String(currentPage),
                searchValue,}),
        );
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        getPizzas();

    }, [categoryId, sort.sortProperty, currentPage]);
    if(!login) {
    return <Navigate to={'/login'}/>
}
    return (
        <div className={s.baseContainer}>
            <Header searchValue={searchValue} sentValue={onChangeText}
                    openBasket={() => setOpen(true)}/>
            <Sort className={styleSelect.select}/>
            <Container sx={{mt: '1rem',}}>
                <main className={s.mainContainer}>
                    {isLoading === 'loading' ?
                        [...new Array(4)].map((_, index) =>
                            <Box sx={{m: '6px'}}>
                                <Skeleton key={index}/>
                            </Box>)
                        :
                        items.filter((el: {
                            name: string; }) => el.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((el: any) =>
                                <Box key={el.id} sx={{m: '6px'}}>
                                    <Main setAlert={() => setAlert(true)}  {...el}/>
                                </Box>)}
                </main>
                <SuperPagination/>
            </Container>
            <Basket removeBasket={removeBasket}  open={open} closeCart={() => setOpen(false)}/>
            <Snack onClose={() => setAlert(false)} isOpen={alert}/>

        </div>
    );
};

export default BaseContainer;