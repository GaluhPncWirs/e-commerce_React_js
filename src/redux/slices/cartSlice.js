import { createSlice } from "@reduxjs/toolkit";

const manipulateCart = createSlice({
  name: "cart",
  initialState: {
    dataCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findIdSame = state.dataCart.find(
        (itemId) => itemId.id === action.payload.id
      );
      if (findIdSame) {
        findIdSame.qty += 1;
      } else {
        state.dataCart.push(action.payload);
      }
    },
  },
});

export const { addToCart } = manipulateCart.actions;
export const selectDataCart = (state) => state.cart.dataCart;
export default manipulateCart.reducer;
