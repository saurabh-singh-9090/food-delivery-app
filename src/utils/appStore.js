import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const appStore = configureStore({
    //'reducer' is the main reducer function for modifying the main redux store
    // cartReducer is responsible for modifying a particular slice of the redux store
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;