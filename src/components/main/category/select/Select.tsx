import React, {DetailedHTMLProps, SelectHTMLAttributes,} from 'react'
import s from './Select.module.css'
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import {categoryProductsTC} from "../../../../store/app-reducer";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType

const arr = [
    {id: 1, value: 'Классика'},
    {id: 2, value: 'Крышесноска'},
    {id: 3, value: 'Бархатные'},
]
export const SuperSelect: React.FC<SuperSelectPropsType> = ({className, onChange, ...restProps}) => {
    const value = useAppSelector((state) => state.products.qualification)
    const dispatch = useAppDispatch()

    const mappedOptions: any[] = arr
        ? arr.map((o) => (
            <option
                className={s.option}
                key={o.id}
                value={o.id}

            >
                {o.value}
            </option>
        ))
        : []

    const onChangeCallback = (e:any) => {
        console.log(e.currentTarget.value)
        dispatch(categoryProductsTC(e.currentTarget.value))
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onClick={(e)=>onChangeCallback(e)}
            value={value}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

