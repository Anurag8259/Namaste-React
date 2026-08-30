import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// "reducer" - One main reducer for the APP.
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;