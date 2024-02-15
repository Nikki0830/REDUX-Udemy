import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
// import reducer from "./userSlice"
// const store = configureStore({reducer})
const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
