import { createSlice } from "@reduxjs/toolkit";
// import { createAction } from "@reduxjs/toolkit";

//actions
// export const addTask = createAction("ADD_TASK");
// console.log(addTask({ task: "Task 1" }));

// export const removeTask = createAction("REMOVE_TASK");
// export const completeTask = createAction("COMPLETE_TASK");

//reduce
// let id = 0;
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];
//     case removeTask.type:
//       return state.filter((task) => task.id === action.payload.id);
//     case completeTask.type:
//       return state.map((task) =>
//         task.id === action.payload.id ? { ...task, completed: true } : task
//       );
//     default:
//       return state;
//   }
// };
// export default reducer;

let id = 0;
const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      //   state.push({
      //     id: ++id,
      //     task: action.payload.task,
      //     completed: false,
      //   });
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    },
    removeTask: (state, action) => {
      //   const index = state.findIndex((task) => task.id === action.payload.id);
      //   state.splice(index, 1);
      return state.filter((task) => task.id === action.payload.id);
    },
    completeTask: (state, action) => {
      //   const index = state.findIndex((task) => task.id === action.payload.id);
      //   state[index].completed = true;
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      );
    },
  },
});

export const { addTask, removeTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
