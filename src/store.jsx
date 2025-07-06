import { configureStore } from "@reduxjs/toolkit";

/**
 * Cái cartReducer này mình tự định nghĩa tùy ý 
 */
import cartReducer from "./cartSlide";

export const store = configureStore({
    reducer : {
        /**
         * cart: 	Là tên key trong Redux state 
         * cartReducer  Hàm xử lí logic từ cartSlice
         */
        cart: cartReducer,
    }
}); 