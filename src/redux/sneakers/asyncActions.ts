import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchSneakers = createAsyncThunk<any, any>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { sortBy, order, category, search, currentPage } = params;
        console.log(params, 4444);
        const { data } = await axios.get<any>(`https://64542d14c18adbbdfeb0f6bc.mockapi.io/items`
            ,{
            params:
                {
                    page: currentPage,
                    limit: 4,
                    sortBy,
                    order,
                    search,
                },


        }
        );

        return data;
    },
);