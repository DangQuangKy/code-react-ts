/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product.type";


const ProductSlice = createSlice({
    name: 'products',
    initialState: {
      CartArr: (() => {
        try {
          const storedCart = localStorage.getItem('cart');
          return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
          console.error('Failed to parse cart JSON from localStorage:', error);
          return [];
        }
      })(),
    },
  reducers: {
    addProduct: (state, action) => {
      const productIndex = state.CartArr.findIndex(
        (p: Product) => p.id === action.payload.id
      );
      if (productIndex === -1) {
        state.CartArr.push({ ...action.payload, quantity: 1 });
      } else {
        state.CartArr[productIndex].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.CartArr));
    },
    deleteProduct: (state, action) => {
      const productIndexRemove = action.payload.id;
      const newCart = state.CartArr.filter(
        (item: Product) => item.id !== productIndexRemove
      );
      return { ...state, CartArr: newCart };
    },
  },
});

export const { addProduct, deleteProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
