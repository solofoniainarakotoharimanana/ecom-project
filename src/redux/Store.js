import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    CARTS: cartSlice.reducer,
  },
});

export default store;
