import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            /* Kiểm tra phần tử thêm vào  đã tồn tại trong giỏ hàng chưa -*/
            const exitting = state.items.find(item => item.id === action.payload.id);
            if (exitting) {
                exitting.quantity += 1;
            }
            else {
                /*- Thêm một đối tượng vào giỏ hàng -*/
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeToCart: (state, action) => {
            state.items = state.items.filter(x => x.id !== action.payload);
        },

        increment: (state, action) => {
            const item = state.items.find(x => x.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decrease: (state, action) => {
            const item = state.items.find(x => x.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },

    }
})

export const { addToCart, removeToCart, increment, decrease } = cartSlice.actions;
export default cartSlice.reducer;