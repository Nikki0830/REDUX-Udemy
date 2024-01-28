// import React, { useState } from "react";
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  //   if (action.type === "INCREMENT") {
  //     return state + 1;
  //   }
  //   if (action.type === "DECREMENT" && state > 0) {
  //     return state - 1;
  //   }else{
  //     alert("count can nat be negative")
  //   }
  //   return state;
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return Math.max(state - 1, 0);
    case "RESET":
      return (state = 0);
    default:
      return state;
  }

  // reducer.js
  // const countReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'INCREMENT':
  //       return { count: state.count + 1 };
  //     case 'DECREMENT':
  //       return { count: state.count - 1 };
  //     case 'RESET':
  //       return { count: 0 };
  //     default:
  //       return state;
  //   }
  // };
};

const Reduce = () => {
  //   const [count, setCount] = useState(0);
  //with useReducer

  const [count, dispatch] = useReducer(reducer, initialState);
  //for switch case
  // const [count,dispatch] = useReducer(reducer,{countvalue:0})

  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() =>
          count > 0
            ? setCount(count + 1)
            : alert("Validation Message: Count cannot be negative.")
        }
      >
        -
      </button> */}
      {/* ////////////// useReducer /////////////////// */}
      <h1>{count}</h1>
      {/* //for switch case */}
      {/* <h1>{count.countvalue}</h1> */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Reduce;
