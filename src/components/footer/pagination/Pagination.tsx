import React from 'react';
import {Pagination, PaginationItem, Stack} from '@mui/material'
import s from './Pagination.module.css';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {pagesProductsTC} from "../../../redux/app-reducer";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import { setCurrentPage } from '../../../redux/filter/filterSlice';

export const SuperPagination = () => {
    const page = useAppSelector(state => state.filter.currentPage)
    const dispatch = useAppDispatch()
    // const lastPage = Math.ceil(totalCount / itemsCountForPage) // решение

    const onChangeCallback = (event: any, page: number) => {
        console.log(page)
        dispatch(setCurrentPage(page))// пишет студент
    }

    return (
        <div className={s.pagination}>
            <Pagination
                count={3}
                color="primary"
                size="large"
                page={page}
                onChange={onChangeCallback}
                renderItem={item => (
                    <PaginationItem
                        components={{ previous:ArrowBack, next: ArrowForward  }}
                        {...item}
                    />
                )}
            />
            </div>
    );
};

