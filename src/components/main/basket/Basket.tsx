import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./basketItem/BasketItem";
import {ProductsType} from "../../../store/app-reducer";
import Typography from "@mui/material/Typography";

type BasketPropsType = {

    open: boolean
    closeCart: () => void
    basket: ProductsType[]
    removeBasket: (id: string) => void
}
const Basket = ({open, closeCart, basket, removeBasket}: BasketPropsType) => {
    return (
        <>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={closeCart}
            >
                <List sx={{width: '400px'}}>
                    <ListItem>
                        <ListItemIcon>
                            <ShoppingBasket/>
                        </ListItemIcon>
                        <ListItemText primary={'Корзина'}/>
                    </ListItem>
                    <Divider/>
                    {
                        !basket.length ? (
                            <ListItem>Корзина пуста!</ListItem>)
                            : (
                                <>
                                    {basket.map(el => (
                                        <BasketItem removeBasket={removeBasket} key={el.id} {...el}/>
                                    ))}
                        <Divider/>
                                    <ListItem>
                                        <Typography sx={{fontWeight:700}}>
                                        Общая  стоимость:{' '}
                                            {basket.reduce((acc,item) => {

                                                return acc + item.price* item.quantity
                                            }, 0)}{' '}
                                        </Typography>
                                    </ListItem>
                                </>
                            )}
                </List>
            </Drawer>
        </>
    );
};

export default Basket;