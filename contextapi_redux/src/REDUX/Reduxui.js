import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, reSet } from "../REDUX/actions/index";

const Reduxui = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Counter with REDUX
      </h1>
      <h1>{myState}</h1>
      <button onClick={() => dispatch(incNumber(5))}>Inc</button>
      <button onClick={() => dispatch(decNumber(2))}>Dec</button>
      <button
        onClick={() => {
          dispatch(reSet());
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Reduxui;
