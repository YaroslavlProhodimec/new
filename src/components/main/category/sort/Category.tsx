// import React from 'react';
// // import s from './Category.css'
// import {Button} from "@mui/material";
// import {useAppDispatch, useAppSelector} from "../../../../redux/store";
// import {setSort} from "../../../../redux/slices/filterSlice";
// type SortProps = {
//     products: []
// }
// export const Category = ({products}: SortProps) => {
//     const categoryId = useAppSelector(state => state.filter.categoryId)
//     const sortType = useAppSelector(state => state.filter.sort.sortProperty)
//     const dispatch = useAppDispatch()
//     // бархатные,свадебные
//     const list = [
//         {name: 'алфавиту', sortProperty: 'title'},
//         {name: 'алфавиту', sortProperty: '-title'},
//         {name: 'цене', sortProperty: 'rating'},
//         {name: 'цене', sortProperty: '-rating'},
//     ]
//     const onClickListItem = (obj:any) => {
//        dispatch(setSort(obj))
//     }
//     return (
//         <div className={s.buttons}>
//             Сортировка по :
//             {
//                 list.map(el => {
//                     return (
//                         <Button  variant={'outlined'} sx={{
//                             border: '1px solid pink',
//                             background: 'linear-gradient(89.9deg, rgb(208, 246, 255) 0.1%, rgb(255, 237, 237) 47.9%, rgb(255, 255, 231) 100.2%)'
//                         }}>
//                             {el.name}
//                         </Button>
//
//                         )
//
//                 })
//             }
//
//
//         </div>
//     );
// };
//
