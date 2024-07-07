import { createSlice } from "@reduxjs/toolkit";

const notification = createSlice({
  name: "notif",
  initialState: {
    status: false,
  },
  reducers: {
    cartNotification: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { cartNotification } = notification.actions;
export default notification.reducer;
