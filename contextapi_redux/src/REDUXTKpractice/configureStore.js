import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task";
// import reducer from "./task";

const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});
// const store = configureStore({ reducer });

export default store;
