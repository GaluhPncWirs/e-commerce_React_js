import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    login: false,
    cart: [{ id: 3, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        login: true,
      };
    default:
      return state;
  }
};

// store
const store = legacy_createStore(cartReducer);
console.log("on create store = ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("store change = ", store.getState());
});

// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 7, qty: 9 } };
store.dispatch(action1);
