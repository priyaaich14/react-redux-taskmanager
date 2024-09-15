// //using useState in redux
// import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from "../src/features/tasks/taskslice";

// export const store = configureStore({
//   reducer: {
//     tasks: taskReducer,
//   },
// });

// using useReducer in redux
// import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from "../src/features/tasks/taskslice";

// export const store = configureStore({
//   reducer: {
//     tasks: taskReducer,
//   },
// });

// using useEffect in redux
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/taskslice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
