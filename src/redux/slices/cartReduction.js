import { createSlice } from "@reduxjs/toolkit";
import { selectDataCart } from "./cartSlice";
import store from "../store";

function getDataCart() {
  const state = store.getState();
  const dataCart = selectDataCart(state);
  return {
    dataQty: [...dataCart],
  };
}

const qtyReduction = createSlice({
  name: "qty",
  initialState: {
    dataQty: getDataCart,
  },
  reducers: {
    removeQty: (state, action) => {
      const findID = state.dataQty.find(
        (itemQty) => itemQty.id === action.payload.id
      );
      if (findID) {
        if (findID.qty > 1) {
          findID.qty -= 1;
        } else {
          state.dataQty = state.dataQty.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const { removeQty } = qtyReduction.actions;
export default qtyReduction.reducer;
