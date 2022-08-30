import { CartActionTypes } from "./cart.types";
import { addItems } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItems(state.items, action.payload),
      };
    default:
      return state;
  }
};
