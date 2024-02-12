//action with redux-toolkit
// import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

//action types nsection
// const ADD_TASK = "ADD_TASK";
// const REMOVE_TASK = "REMOVE_TASK";
// const COMPLETE_TASK = "COMPLETE_TASK";

//action with redux-toolkit
// export const addTask = createAction("ADD_TASK");
// // console.log(addTask)
// // console.log(addTask())
// // console.log(addTask({ task: "Task 1" }));
// console.log(addTask.type);

// export const removeTask = createAction("REMOVE_TASK");
// export const completeTask = createAction("COMPLETE_TASK");
// console.log(removeTask({id:id}))

//actions
// export const addTask = (task) => {
//   return {
//     type: ADD_TASK,
//     payload: {
//       task: task,
//     },
//   };
// };

// export const removeTask = (id) => {
//   return {
//     type: REMOVE_TASK,
//     payload: {
//       id: id,
//     },
//   };
// };

// export const completeTask = (id) => {
//   return {
//     type: COMPLETE_TASK,
//     payload: {
//       id: id,
//     },
//   };
// };

// export const fetchTodo = () => async (dispatch, getData) => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const task = await response.json();

//   dispatch(addTask(task.title));
// };

//reducer with redux toolkit
//crate once with builder webpack
// let id = 0;

// export default createReducer([], {
//  [addTask.type]: (state, action) => {
//     state.push({
//       id: ++id,
//       task: action.payload.task,
//       completed: false,
//     });
//   },
//   [removeTask.type]: (state, action) => {
//     // state.filter((task) => task.id === action.payload.id);
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state.splice(index, 1);
//   },
//   [completeTask.type]: (state, action) => {
//     // state.map((task) =>
//     //   task.id === action.payload.id ? { ...task, completed: true } : task
//     // );
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     console.log(index);
//     state[index].completed = true;
//   },
// });

//reducer function
// let id = 0;
// const reducerRToolkit = (state = [], action) => {
//   switch (action.type) {
//     // case ADD_TASK:
//     //case with redux toolkit
//     case addTask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];
//     // case REMOVE_TASK:
//     //case with redux toolkit
//     case removeTask.type:
//       return state.filter((task) => task.id === action.payload.id);

//     // case COMPLETE_TASK:
//     //case with redux toolkit
//     case completeTask.type:
//       return state.map((task) =>
//         task.id === action.payload.id ? { ...task, completed: true } : task
//       );
//     default:
//       return state;
//   }
// };
// export default reducerRToolkit;

// createslice()
let id = 0;
const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducer: {
    addTask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    },
    completeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = true;
    },
  },
});
// console.log(taskSlice)
export const { addTask, removeTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
// export default taskSlice
