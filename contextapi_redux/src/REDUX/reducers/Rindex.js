import changeNumber from "./incdec";

import { combineReducers } from "redux";
// import { createSlice } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // const rootReducer = createSlice({
  changeNumber,
  // counter:changeNumber,
  //you can write as a key value pair
  // changeNum: changeNumber
  //, if you havbe other reducers fun
  //then add it here one by one
});
export default rootReducer;
