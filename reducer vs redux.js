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

import React from "react";
import "./styles.css";
import { render } from "react-dom";

import {createStore} from 'redux'

//DISPATCH calls reducer with action (calls reducer with action argument)
store.dispatch(increment)

//ACTION(returns name object)
const increment = () => {
    return {name: 'INCREMENT'}
}

//REDUCER(action)
const counter = (state = 0, action) =>  {
    switch(action.name){
        case 'increment':
            return state +1
    }
}

//STORE => GLOBALISED STORE
let store = createStore(counter)


export default App;
