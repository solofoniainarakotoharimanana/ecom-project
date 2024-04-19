/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart slice",
  initialState: {
    cartList: [],
  },
  reducers: {
    addToCart: (state, action) => {
      /*console.log(state.cartList);
      const cartExist = state.cartList.find((cart) => {
        cart.id === action.payload.id;
      });*/

      const item = state.cartList.find((c) => c.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartList.push(action.payload);
      }

      /*if (cartExist) {
        cartExist.quantity += action.payload.quantity;
      } else {
        state.cartList.push(action.payload);
      }*/
    },
    increaseQuantity: (state, { payload }) => {
      const item = state.cartList.find((c) => c.id === payload.id);
      if (item) {
        state.cartList = { ...item, quantity: payload.quantity++ };
      }
    },
  },
});

export const { addToCart, increaseQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export default cartSlice;
