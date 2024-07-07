import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const section = createAction("CREATE_SECTION");
const userLogin = createReducer({ info: false }, (builder) => {
  builder.addCase(section, (state, action) => {
    state.info = true;
  });
});

const store = configureStore({
  reducer: {
    login: userLogin,
    cart: cartReducer,
  },
});

// subscribe
store.subscribe(() => {
  console.log("store change = ", store.getState());
});

// dispatch
const action1 = addToCart({ id: 4, qty: 70 });
store.dispatch(action1);
store.dispatch(section());
