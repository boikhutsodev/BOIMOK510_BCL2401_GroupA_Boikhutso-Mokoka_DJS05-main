import { action } from "./action.js";
import { initialState } from "./initialState.js";

export function reducer(state = initialState, actions) {
  switch (actions.type) {
    case action.INCREMENT:
      return { count: state.count + 2 };
    case action.DECREMENT:
      return { count: state.count - 1 };
    case action.RESET:
      return { count: 0 };
    default:
      return state;
  }
}
