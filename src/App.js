import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {data}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;
