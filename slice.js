import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const stateLogin = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    handleLogin(state, action) {
      state.status = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: stateLogin.reducer,
  },
});

store.subscribe(() => {
  console.log("store change = ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 3, qty: 4 }));
store.dispatch(stateLogin.actions.handleLogin({ status: true }));
