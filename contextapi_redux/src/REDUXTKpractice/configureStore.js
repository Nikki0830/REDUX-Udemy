import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task";
import employeeSlice from "./employee";
// import reducer from "./task";

//for middleware
// import log from "./middleware/log";
import logger from "redux-logger";
import error from "./middleware/error";


const store = configureStore({
  reducer: {
    task: taskSlice,
    employee: employeeSlice,
  },
  // // middleware: [log],
  // middleware:(getdefaultMiddleware) => [...getdefaultMiddleware(),log]
  // middleware:(getDefaultMiddleware) => [...getDefaultMiddleware(),logger]

  //middleware runs in order so first  ...getDefaultMiddleware(),logger,error
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    error,
  ],
});
// const store = configureStore({ reducer });

export default store;
