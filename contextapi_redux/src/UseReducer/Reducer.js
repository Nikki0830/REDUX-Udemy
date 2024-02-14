//counter with useReducer
//   let initialState = 0;
//   const reducerFun = (state, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state +1
//             case "DECREMERNT":
//            return  state-1
//            case "RESET":
//             return state=0
//             default:return state
//   };
//   //just like const [count,setCount] = useState(0)
//   const [count, dispatch] = useReducer(reducerFun, initialState);

//   return (
//     <div>
//
//     </div>
//   );
// };

// import React, { useState } from "react";

// const Reducer = () => {
//   //increment decrement in react normal code
//   let [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Inc</button>
//       {/* <button onClick={() => setCount(Math.max(count - 1, 0))}>Dec</button> */}
//       <button
//         onClick={() =>
//           setCount(count > 0 ? count - 1 : alert("count can not be nagative"))
//         }
//       >
//         Dec
//       </button>
//       <button
//         onClick={() => {
//           setCount((count = 0));
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// export default Reducer;

//counter with useReducer
import React, { useReducer } from "react";

const iniState = 0;
const reducerFun = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      // return state > 0 ? state - 1 : alert("count can not be negative");
      return Math.max(state-1,0)
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducerFun, iniState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Reducer;
