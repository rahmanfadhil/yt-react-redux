import { createStore } from "redux";

// function reducer(state = 0, action) {
//   if (action.type === "INCREMENT") {
//     return state + 1;
//   }

//   if (action.type === "DECREMENT") {
//     return state - 1;
//   }

//   state = state + 1;

//   return state;
// }

function reducer(state = [], action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat([action.payload]);
    case "DELETE_TODO":
      return state.filter((item, index) => index !== action.id);
    case "UPDATE_TODO":
      return state.map((item, index) =>
        index === action.id ? action.payload : item
      );
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("State has changed!", store.getState());
});

store.dispatch({ type: "CREATE_TODO", payload: "Learn React" });
store.dispatch({ type: "CREATE_TODO", payload: "Learn Vue" });
store.dispatch({ type: "CREATE_TODO", payload: "Learn Angular" });

store.dispatch({ type: "DELETE_TODO", id: 2 });

store.dispatch({ type: "UPDATE_TODO", id: 0, payload: "Learn Node.js" });

export default store;
