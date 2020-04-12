import React, { useReducer } from "react";
import "./styles.css";

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

//--------------------------------------------------------------------------

import React, { useReducer } from "react";
import "./styles.css";
import { render } from "react-dom";

const App = () => {
  const initialState = {
    today: [1, 2, 3],
    finished: ["Loss", "Win", "Draw"],
    later: [2, 3, 1, 4, 2, 5]
  };

  // reducer(call to change state) state(current immutable state) initial state(start) action(what/how tomodify)

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state.today, action.payload];
      case "DELETE_TODO":
        return state.today.filter((item, index) => index !== action.payload);
      case "GET_TODO":
        return state.finished[1];
      case "ADD_LATER":
        return [...state, action.payload];
      case "DELETE_LATER":
        return state.filter((item, index) => index !== action.payload);
      case "GET_LATER":
        return [...state.later];
      case "ADD_FINISHED":
        return [...state, action.payload];
      case "DELETE_FINISHED":
        return state.filter((item, index) => index !== action.payload);
      case "GET_FINISHED":
        return [...state.finished];
      default:
        return state;
    }
  };

  const newState = reducer(initialState, { type: "GET_TODO" });
  return <div>{newState}</div>;
};

export default App;

