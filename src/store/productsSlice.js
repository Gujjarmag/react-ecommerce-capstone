import { createSlice } from "@reduxjs/toolkit";
import { products } from "./productsData";

const initialState = {
  items: products,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
