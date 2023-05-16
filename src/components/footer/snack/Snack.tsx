import React from 'react';
import {Alert, Snackbar} from "@mui/material";
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

type TypeSnackProps = {
    isOpen: boolean
    onClose: () => void
}
export const Snack = ({isOpen, onClose}: TypeSnackProps) => {
    // useWhyDidYouUpdate('Snack', {
    //     isOpen, onClose
    // })
    return (
        <Snackbar open={isOpen} onClose={onClose}
                  autoHideDuration={3000}
        >
            <Alert severity={'success'}>
                Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    );
};

