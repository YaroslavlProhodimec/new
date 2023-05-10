import React, {DetailedHTMLProps, SelectHTMLAttributes,} from 'react'
import s from './Select.module.css'
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {categoryProductsTC} from "../../../../redux/app-reducer";
import {setSort} from "../../../../redux/slices/filterSlice";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType

const list = [
    {name: 'пополярности', sortProperty: 'rating'},
    {name: 'пополярности', sortProperty: '-rating'},
    {name: 'цене', sortProperty: 'price'},
    {name: 'цене', sortProperty: '-price'},
]

export const Sort: React.FC<SuperSelectPropsType> = ({className, onChange, ...restProps}) => {
    const value = useAppSelector((state) => state.filter.sort)
    const dispatch = useAppDispatch()

    const onClickListItem = (obj:any) => {
        dispatch(setSort(obj))
    }
    const mappedOptions: any[] = list
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

    const onChangeCallback = (e:any) => {

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

