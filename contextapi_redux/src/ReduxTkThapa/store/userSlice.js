import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      //logic
      state.push(action.payload)
      // console.log("action data",action.payload)
      // return[
      //   ...state,
      //   action.payload
      // ]
        console.log("action data", action.payload)
    },
    
    deleteMe: (state, action) => {
      //logic
      console.log("delecteaction",action.payload)
      // state.pop(action.payload)
      state.splice(action.payload,1)
    },
    deleteAll: (state, action) => {
      //logic
    },

  },
});

// console.log(userSlice)
console.log(userSlice.actions)
export const {addUser,deleteMe,deleteAll} = userSlice.actions
export default userSlice.reducer;

