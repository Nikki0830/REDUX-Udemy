import { createSlice } from "@reduxjs/toolkit"

let id = 0;
const employeeSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTaskE: (state, action) => {
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

export const { addTaskE, removeTask, completeTask } = employeeSlice.actions;
export default employeeSlice.reducer;