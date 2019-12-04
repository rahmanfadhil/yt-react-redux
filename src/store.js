import { createStore } from "redux";

function reducer(state = 0, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  state = state + 1;

  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("State has changed!", store.getState());
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "DECREMENT" });

export default store;
