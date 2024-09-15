// //using useState in redux
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: [],
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//     },
//     removeTask: (state, action) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//     toggleTaskState: (state, action) => {
//       const task = state.tasks.find((task) => task.id === action.payload);
//       if (task) {
//         task.isCompleted = !task.isCompleted;
//       }
//     },
//     editTask: (state, action) => {
//       const { id, title, description } = action.payload;
//       const task = state.tasks.find((task) => task.id === id);
//       if (task) {
//         task.title = title;
//         task.description = description;
//       }
//     },
//   },
// });
// export const { addTask, removeTask, toggleTaskState, editTask } =
//   taskSlice.actions;
// export default taskSlice.reducer;

//using useReducer in redux
// import { createSlice } from "@reduxjs/toolkit";

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     tasks: [],
//   },
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//     },
//     removeTask: (state, action) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//     toggleTaskState: (state, action) => {
//       const task = state.tasks.find((task) => task.id === action.payload);
//       if (task) {
//         task.isCompleted = !task.isCompleted;
//       }
//     },
//     editTask: (state, action) => {
//       const { id, title, description } = action.payload;
//       const task = state.tasks.find((task) => task.id === id);
//       if (task) {
//         task.title = title;
//         task.description = description;
//       }
//     },
//   },
// });
// export const { addTask, removeTask, toggleTaskState, editTask } =
//   taskSlice.actions;
// export default taskSlice.reducer;

// using useEffect in redux

import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskState: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
  },
});

export const { setTasks, addTask, removeTask, toggleTaskState, editTask } =
  taskSlice.actions;

export default taskSlice.reducer;
