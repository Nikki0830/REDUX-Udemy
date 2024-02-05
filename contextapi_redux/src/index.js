import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store from "./REDUX/store";
// import { Provider } from "react-redux";
import store from "./Component/REDUXUDEMY/store";
import { addTask, removeTask } from "./Component/REDUXUDEMY/action";

//to display is ypur app has redux store opr not
// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "ADD_TASK", payload: { task: "Task 1" } });
// console.log(store.getState())

// store.dispatch({ type: "REMOVE_TASK", payload: { id: 1 } });
// console.log(store.getState());

store.dispatch(addTask("Task 1"));
console.log(store.getState());

store.dispatch(removeTask(1));
console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
