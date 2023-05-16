import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useState,} from 'react'
import s from './Sort.module.css'
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {setSort} from "../../../../redux/filter/filterSlice";
import {selectSort} from "../../../../redux/filter/selectors";
import {Sort} from "../../../../redux/filter/types";


type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType

type ListType = {
    name:string
    sortProperty:Sort
}
const list:ListType[] = [
    {name: 'Популярности', sortProperty: Sort.RATING},
    {name: 'По цене(рост)', sortProperty: Sort.PRICE },

]

export const SortSelect: React.FC<SuperSelectPropsType> = ({className, onChange, ...restProps}) => {

    const dispatch = useAppDispatch()


    const mappedOptions: JSX.Element[] = list
        ? list.map((o,index) => (
            <option
                className={s.option}
                key={index}
                value={index}

            >
                {o.name}
            </option>
        ))
        : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const name = list[+e.currentTarget.value].name
        const sortProperty = list[+e.currentTarget.value].sortProperty
        const item = {
            name,
            sortProperty
        }
        dispatch(setSort(item))
    }


    return (
        <select
            className={s.select}
            onChange={onChangeCallback}

        >
            {mappedOptions}
        </select>
    )
}
