import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import s from './Sneakers.module.css'
import {Sneaker} from "./sneaker/Sneaker";

export const Sneakers = () => {
   const [sneaker,setSneaker] = useState<any>([])
   const navigate =  useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        async function fetchSneaker() {
            try {
                const {data} = await  axios.get('https://64542d14c18adbbdfeb0f6bc.mockapi.io/items/' + id)
                setSneaker(data)
            } catch (error){
                 alert('Не существует')
                navigate('/')
            }
        }
        fetchSneaker()
    },[])
    if(!sneaker){
        return <div>' Загрузка...'</div>
    }

    return (
        <div className={s.sneakers}>
           < Sneaker id={id} />
            <p>
                {sneaker.name}
            </p>
        </div>
    );
};

