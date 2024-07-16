import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import notificationReducer from "./slices/noficationCart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
  },
});

export default store;
