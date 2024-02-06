import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store from "./REDUX/store";
// import { Provider } from "react-redux";
import store from "./Component/store/configureStore";
import {
  addTask,
  completedTask,
  removeTask,
  fetchTodo
} from "./Component/store/task";

//to display is ypur app has redux store opr not
// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "ADD_TASK", payload: { task: "Task 1" } });
// console.log(store.getState())

// store.dispatch({ type: "REMOVE_TASK", payload: { id: 1 } });
// console.log(store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated", store.getState());
});

store.dispatch(addTask("Task 1"));
store.dispatch(addTask("Task 2"));
store.dispatch(addTask("Task 3"));

// console.log(store.getState());

// store.dispatch(removeTask(2));
// console.log(store.getState())

store.dispatch(completedTask(1));

store.dispatch(removeTask(2));
store.dispatch(fetchTodo())

// unsubscribe();

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
