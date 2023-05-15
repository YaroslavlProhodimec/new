import React from 'react';
import s from './Sneaker.module.css'
import nikeGreen from "../../../../img/nikeGreen-PhotoRoom.png-PhotoRoom.png";
import {motion, useMotionValue, useTransform} from "framer-motion";
import Button from "@mui/material/Button";

const photos = [
    {id:'6',image:nikeGreen},

]
type PropsSneaker = {
    id:string  | undefined
}
export const Sneaker = ({id}:PropsSneaker) => {

        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const rotateX = useTransform(y, [-100, 100], [30, -30]);
        const rotateY = useTransform(x, [-100, 100], [-30, 30]);

        const colors = [
            {value: '#b6a179'},
            {value: '#272425'},
            {value: '#6389cb'},
            {value: '#f2c758'},
            {value: '#ffffff'},
        ];

        return (

            <div className={s.cardContainer}>
                <motion.div
                    style={{x, y, rotateX, rotateY, z: 100}}
                    drag
                    dragElastic={0.18}
                    dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                    whileTap={{cursor: 'grabbing'}}
                    className={s.card}
                >
                    cart logo
                    <div className={s.cardLogo}>

                    </div>

                    <h1 className={s.cardTitle}
                    >Nike Air Max Pre-Day</h1>

                    <p className={s.cardSubtitle}

                    >
                        Taking the classic look of heritage Nike Running into new realm, the
                        Nike Air Max Pre-Day brings you a fast-paced look that's ready for
                        today's world.
                    </p>

                    <div className={s.priceWrapper}
                    >
                        <Button
                        >
                            Add to Bag
                        </Button>
                        <div className={s.price}

                        >$495.00
                        </div>
                    </div>
                    {/* colors */}
                    <ul className={s.colors}
                    >
                        {colors.map((color, index) => {
                            return (
                                <li
                                    key={index}
                                    style={{backgroundColor: color.value}}
                                    className={s.color}

                                ></li>
                            );
                        })}
                    </ul>
                    {/* card image */}
                    <motion.div
                        style={{x, y, rotateX, rotateY, z: 100000}}
                        className={s.cardImage}

                    >
                        {photos.map(el => el.id === id ?
                            <img className={s.img} src={el.image} draggable='false' alt=""/> : null
                        )}

                    </motion.div>
                </motion.div>
            </div>

        );


}