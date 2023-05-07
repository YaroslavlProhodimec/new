import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://64542d14c18adbbdfeb0f6bc.mockapi.io/',

})
const category =(categoryId:number) => categoryId > 1 ? `category=${categoryId}`:''
export const appAPI = {
    app() {
        return   instance.get('items')
    },
    category(categoryId:number) {
        console.log(categoryId)
        return   instance.get('items?'+ category(categoryId))
    }
}
