import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import notificationReducer from "./slices/noficationCart";
import qtyReduction from "./slices/cartReduction";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
    // reductionQty: qtyReduction,
  },
});

export default store;
