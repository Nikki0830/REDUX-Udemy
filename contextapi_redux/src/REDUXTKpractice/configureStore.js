import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task";
import employeeSlice from "./employee";
// import reducer from "./task";

//for middleware
import log from "./middleware/log";

const store = configureStore({
  reducer: {
    task: taskSlice,
    employee: employeeSlice,
  },
  // middleware: [log],
  middleware:(getdefaultMiddleware) => [...getdefaultMiddleware(),log]

});
// const store = configureStore({ reducer });

export default store;
