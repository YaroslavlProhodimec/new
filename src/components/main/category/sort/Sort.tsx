import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes,} from 'react'
import s from './Sort.module.css'
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {setSort} from "../../../../redux/filter/filterSlice";


type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType

const list = [
    {name: 'По популярности', sortProperty: 'rating'},
    {name: 'По цене(рост)', sortProperty: 'price'},

]

export const Sort: React.FC<SuperSelectPropsType> = ({className, onChange, ...restProps}) => {
    const value = useAppSelector((state) => state.filter.sort)
    const dispatch = useAppDispatch()


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

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const name = list[+e.currentTarget.value].name
        const sortProperty = list[+e.currentTarget.value].sortProperty
        const item2 = {
            name,sortProperty
        }
        console.log(item2)
       dispatch(setSort(item2))
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

