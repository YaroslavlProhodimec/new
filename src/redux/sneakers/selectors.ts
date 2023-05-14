import {RootState} from "../store";

export const selectSneakers = (state: RootState) => state.sneakers;

export const selectCartItemById = (id: string) => (state: RootState) =>
    state.sneakers.items.find((obj:any) => obj.id === id);