import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

function counterReducer(state = 0, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
}

function todosReducer(state = [], action) {
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

const store = createStore(
  combineReducers({
    todos: todosReducer,
    counter: counterReducer
  }),
  applyMiddleware(logger)
);

export default store;
