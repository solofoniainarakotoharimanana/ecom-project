/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart slice",
  initialState: {
    cartList: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExist = state.cartList.find((c) => c.id === action.payload.id);

      if (itemExist) {
        let tempQty = itemExist.quantity + 1;
        /*itemExist.total = itemExist.quantity * itemExist.productPrice;*/
        state.cartList = state.cartList.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: tempQty,
                total: item.productPrice * tempQty,
              }
            : item
        );
      } else {
        state.cartList.push(action.payload);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cartList = state.cartList.filter((item) => item.id !== payload.id);
    },
    removeCart: (state) => {
      state.cartList = [];
    },
    increaseQuantity: (state, { payload }) => {
      state.cartList = state.cartList.map((item) =>
        item.id === payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.productPrice * (item.quantity + 1),
            }
          : item
      );
    },
    decreaseQuantity: (state, action) => {
      state.cartList = state.cartList.map((item) =>
        item.id === action.payload.id
          ? item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                total: item.productPrice * (item.quantity - 1),
              }
            : { ...item, quantity: 1, total: item.productPrice }
          : { ...item, quantity: 1, total: item.productPrice }
      );
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  removeCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export default cartSlice;
