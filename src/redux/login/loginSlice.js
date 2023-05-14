import {createSlice} from "@reduxjs/toolkit";
import {fetchLogin, fetchLogOut, fetchSneakers} from "./asyncActions";


export const initialState = {
    isInitialzed:false
}



const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin(state, action) {
            state.isInitialzed = action.payload
        },
        setLogOut(state, action) {
            state.isInitialzed = action.payload
        }
    },
    extraReducers: {
        [fetchLogin.pending]: (state) => {


        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.isInitialzed = true

        },
        [fetchLogin.rejected]: (state, action) => {
            state.isInitialzed = false

        },
        [fetchLogOut.pending]: (state) => {
            },
        [fetchLogOut.fulfilled]: (state, action) => {
            state.isInitialzed = false

        },
        [fetchLogOut.rejected]: (state, action) => {
            state.isInitialzed = true

        }
    }

})
// export const {setLogOut,} = sneakersSlice.actions

export default loginSlice.reducer