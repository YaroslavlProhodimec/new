import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./basketItem/BasketItem";
import Typography from "@mui/material/Typography";
import {useAppSelector} from "../../../redux/store";
import {selectorBasket} from "../../../redux/basket/basketSlice";

type BasketPropsType = {

    open: boolean
    closeCart: () => void
    // basket: ProductsType[]
    removeBasket: (id: string) => void
}
const Basket = ({open, closeCart, removeBasket}: BasketPropsType) => {
       const totalPrice =  useAppSelector(selectorBasket)
       const basket =  useAppSelector(state=>state.basket.items)
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
                                    {basket.map((el:any) => (
                                        <BasketItem removeBasket={removeBasket} key={el.id} {...el}/>
                                    ))}
                        <Divider/>
                                    <ListItem>
                                        <Typography sx={{fontWeight:700}}>
                                        Общая  стоимость: {totalPrice}$
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