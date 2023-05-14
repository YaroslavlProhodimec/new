import React from 'react';
import {ProductsType} from "../../../../redux/app-reducer";
import {Close} from "@mui/icons-material";
import {ListItem} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {removeItem} from "../../../../redux/basket/basketSlice";
import {useAppDispatch} from "../../../../redux/store";

type PropsBasketItemType = {
    id: string
    name: string
    price: number
    quantity?: number
    removeBasket: (id: string) => void
}
const BasketItem = ({id, name, price, quantity}: PropsBasketItemType) => {
    const dispatch = useAppDispatch()

    return (
        <ListItem>
            <Typography
                variant={'body1'}
            >
                {name} {price}руб х{quantity}
            </Typography>
            <IconButton onClick={() => dispatch(removeItem(id))}>
                <Close/>
            </IconButton>

        </ListItem>
    );
};

export default BasketItem;