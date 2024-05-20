// import

import { action } from "./action.js";
import { reducer } from "./reducer.js";
import { createStore } from "./Store.js";

// Create store
const store = createStore(reducer);

// Scenario 1:
console.log('Scenario 1: Initial State Verification');
console.log(store.getState {});

// 2
console.log('Scenario 2: Incrementing the Counter');

// Store
store.dispatch({ type: action.INCREMENT});
console.log(store.getState{});

// 3
console.log('Scenario 3: Decrementing the Counter');
store.dispatch({ type: action.DECREMENT});
console.log(store.getState{});

//4
console.log('Scenario 4: Resetting the counter');
store.dispatch({ type: action.RESET});
console.log(store.getState{});