import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {ImageButtonCard} from "./imageButtonCard/ImageButtonCard";
import {Button} from "@mui/material";
import {addItem} from "../../redux/slices/basketSlice";
import {useAppDispatch} from "../../redux/store";
import {NavLink} from "react-router-dom";


type PropsMainType = {
    id: string
    image?: any
    name: string
    style:string
    price: number
    quantity?: number
    addBasket: (id: string, name: string, price: number, quantity: number) => void
    setAlert: () => void

}

export function Main({id, image, price, name, style, setAlert, }: PropsMainType) {
    const dispatch = useAppDispatch()
    const buttonClick = () => {
        const item = {
            id,
            name,
            price,
            image,

        }
       dispatch(addItem(item))
        setAlert()
    }
    return (


        <Card sx={{
            m: '3px',
            maxWidth: 345,
            background: 'linear-gradient(89.9deg, rgb(208, 246, 255) 0.1%, rgb(255, 237, 237) 47.9%, rgb(255, 255, 231) 100.2%)'
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader={style}
            />
            <NavLink to={`/sneakers/${id}`}style={{ textDecoration: 'none' }}>
            <ImageButtonCard id={id} name={name} image={image}/></NavLink>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <Button onClick={buttonClick} variant={'outlined'} sx={{
                    border: '1px solid pink',
                    background: 'linear-gradient(89.9deg, rgb(208, 246, 255) 0.1%, rgb(255, 237, 237) 47.9%, rgb(255, 255, 231) 100.2%)'
                }}>
                    Купить
                </Button>
            </CardActions>

        </Card>


    );
}