import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const item = actions.payload;

      const existingItem = state.cartList.find((prod) => prod.id === item.id);

      existingItem
        ? (existingItem.quantity += 1)
        : state.cartList.push({ ...item, quantity: 1 });

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, actions) => {
      const item = actions.payload;

      const existingItem = state.cartList.find((prod) => prod.id === item.id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartList = state.cartList.filter((p) => p.id !== item.id);
        }
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
    clearCart: (state) => {
      state.cartList = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
