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
    reductionQty: (state, action) => {
      const findId = state.dataCart.find(
        (item) => item.id === action.payload.id
      );
      if (findId) {
        if (findId.qty > 1) {
          findId.qty -= 1;
        } else {
          state.dataCart = state.dataCart.filter(
            (qty) => qty.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const { addToCart, reductionQty } = manipulateCart.actions;
export default manipulateCart.reducer;
