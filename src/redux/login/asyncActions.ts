import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a4e56366-fe3d-4e5d-8c7b-0714b5ffdb22'
    }
})
type ParamsProps = {
    email:string
    password:string
    rememberMe:boolean
}


export const fetchLogin = createAsyncThunk<any, any>(
    'login/fetchLoginStatus',
    async (params:ParamsProps) => {
        console.log(params, 4444);
        const { data } = await instance.post<any>('auth/login'
            ,params
        );

        return data;
    },
);
export const fetchLogOut = createAsyncThunk(
    'fetchLogOut/fetchLogOutStatus',
    async () => {
        console.log( 'fetchLogOut');
        const { data } = await instance.delete('auth/login');

        return data;
    },
);