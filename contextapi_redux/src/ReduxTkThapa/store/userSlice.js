import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      //logic
      state.push(action.payload);
      // console.log("action data",action.payload)
      // return[
      //   ...state,
      //   action.payload
      // ]
      // console.log("action data", action.payload);
    },

    deleteMe: (state, action) => {
      //logic
      // console.log("delecteaction", action.payload);
      // state.pop(action.payload)
      let index = state.indexOf(action.payload);
      state.splice(index, 1);
      // state.splice(action.payload,1)
    },
    // deleteAll: (state, action) => {
    //   //logic
    //   // console.log("Hi delete all")
    //   return (state = []);
    // },
    deleteAll(state, action) {
      //logic
      // console.log("Hi delete all")

      //here we are mot deleteing we are assigning new empty array
      //return (state = []);

      //for deletint just empy the old state data 
      return []
    },
  },
  //you can do with function as well as object
  // extraReducers(builder){
  //   builder.addCase(userSlice.actions.deleteAll,()=>{
  //     //logic of deleteAll
  //     return []
  //   })
  // }
});

// console.log(userSlice)
// console.log(userSlice.actions);
export const { addUser, deleteMe, deleteAll } = userSlice.actions;
export default userSlice.reducer;
