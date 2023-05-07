import React from 'react';

type ButtonsProps = {
    products: []
}
export const Buttons = ({products}: ButtonsProps) => {

    const list = [
        {name: 'алфавиту', sortProperty: 'title'},
        {name: 'алфавиту', sortProperty: '-title'},
        {name: 'цене', sortProperty: 'rating'},
        {name: 'цене', sortProperty: '-rating'},
    ]
    return (
        <div>
            Сортировка по :
            {
                list.map(el => {
                    return (
                        <ul>
                            <li>{el.name}</li>
                        </ul>)

                })
            }


        </div>
    );
};

