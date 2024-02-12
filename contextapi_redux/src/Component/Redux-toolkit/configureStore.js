import { configureStore } from "@reduxjs/toolkit";
// import reducerRToolkit from "./task2";
import taskSlice from "./task2";

//here confiStore( takes an object one is reducer(key)
//and value is rootreducer(value) here its one reducer
// fun so we can take directly here
// const store = configureStore({reducer:reducer});

//and is the key and value name is same then
// const store = configureStore({reducer:reducerRToolkit})

//with redux toolkit
const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});
export default store;
