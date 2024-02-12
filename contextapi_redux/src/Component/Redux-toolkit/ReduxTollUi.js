import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, completeTask } from "./task2";

const ReduxTollUi = () => {
  const myState = useSelector((state) => state.taskSlice);
  const dispatch = useDispatch();
  console.log(myState);
  return (
    <div>
      <h1>Todolist with redux-toolkit</h1>
      <h1>{myState}</h1>
      {/* <h1>{dispatch(addTask({ task: "Task 1" }))}</h1> */}
      <button onClick={() => dispatch(addTask({ task: "Task 1" }))}>
        hhhh
      </button>
    </div>
  );
};

export default ReduxTollUi;
