// //using useState and reduxtoolkit

// import TaskForm from "./TaskForm";
// import TaskList from "./TaskList";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addTask,
//   removeTask,
//   toggleTaskState,
//   editTask,
// } from "../features/tasks/taskslice";

// export default function TaskManager() {
//   const tasks = useSelector((state) => state.tasks.tasks);
//   const dispatch = useDispatch();

//   const handleAddTask = (task) => {
//     dispatch(addTask(task));
//   };

//   const handleRemoveTask = (id) => {
//     dispatch(removeTask(id));
//   };

//   const handleUpdateState = (id) => {
//     dispatch(toggleTaskState(id));
//   };

//   const handleEditTask = (id, title, description) => {
//     dispatch(editTask({ id, title, description }));
//   };

//   return (
//     <div>
//       <h2>Task Manager App</h2>
//       <h3>Listing Task - {tasks.length}</h3>
//       <TaskList
//         tasks={tasks}
//         handleRemoveTask={handleRemoveTask}
//         handleUpdateState={handleUpdateState}
//         handleEditTask={handleEditTask}
//       />
//       <TaskForm handleAddTask={handleAddTask} />
//     </div>
//   );
// }

// using useReducer in redux
// import TaskForm from "./TaskForm";
// import TaskList from "./TaskList";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addTask,
//   removeTask,
//   toggleTaskState,
//   editTask,
// } from "../features/tasks/taskslice";

// export default function TaskManager() {
//   const tasks = useSelector((state) => state.tasks.tasks);
//   const dispatch = useDispatch();

//   const handleAddTask = (task) => {
//     dispatch(addTask(task));
//   };

//   const handleRemoveTask = (id) => {
//     dispatch(removeTask(id));
//   };

//   const handleUpdateState = (id) => {
//     dispatch(toggleTaskState(id));
//   };

//   const handleEditTask = (id, title, description) => {
//     dispatch(editTask({ id, title, description }));
//   };

//   return (
//     <div>
//       <h2>Task Manager App</h2>
//       <h3>Listing Task - {tasks.length}</h3>
//       <TaskList
//         tasks={tasks}
//         handleRemoveTask={handleRemoveTask}
//         handleUpdateState={handleUpdateState}
//         handleEditTask={handleEditTask}
//       />
//       <TaskForm handleAddTask={handleAddTask} />
//     </div>
//   );
// }

// using useEffect in redux

import React, { useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useSelector, useDispatch } from "react-redux";
import {
  setTasks,
  addTask,
  removeTask,
  toggleTaskState,
  editTask,
} from "../features/tasks/taskslice";

export default function TaskManager() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      dispatch(setTasks(JSON.parse(storedTasks)));
    }
  }, [dispatch]);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleUpdateState = (id) => {
    dispatch(toggleTaskState(id));
  };

  const handleEditTask = (id, title, description) => {
    dispatch(editTask({ id, title, description }));
  };

  return (
    <div>
      <h2>Task Manager App</h2>
      <h3>Listing Task - {tasks.length}</h3>
      <TaskList
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
        handleUpdateState={handleUpdateState}
        handleEditTask={handleEditTask}
      />
      <TaskForm handleAddTask={handleAddTask} />
    </div>
  );
}
