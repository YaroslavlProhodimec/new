import React from 'react';
import s from './LogOut.module.css'
import {Button} from "@mui/material";
import { motion } from 'framer-motion';
import {fetchLogOut} from "../../../redux/login/asyncActions";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {Navigate} from "react-router-dom";
export const LogOut = () => {
    const dispatch = useAppDispatch()
   const login =  useAppSelector(state=>state.login.isInitialzed)


    // const onClickOn = (e:any) => {
    //
    //     dispatch(fetchLogOut())
    // };
    if(!login) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={s.logout}>
            {/*<motion.h1 className ={s.exit}*/}
            {/*    animate={*/}
            {/*    {fontSize: "3rem",*/}
            {/*        x: 20, y: -10*/}
            {/*    }*/}
            {/*}>*/}

            {/*    Вы действительно хотите выйти?*/}
            {/*</motion.h1>*/}
            {/*<motion.h1 animate={*/}
            {/*    {fontSize: "3rem",x: 20, y: -10}*/}
            {/*} className={s.repeatExit}>Выходим?</motion.h1>*/}
            {/*<div className={s.buttons}>*/}
            {/*<Button onClick={onClickOn} variant={"contained"}>да</Button>*/}
            {/*<Button variant={"contained"}>нет</Button>*/}
            {/*</div>*/}
        </div>
    );
};

