// //using useState in redux

// import { useState } from "react";

// export default function TaskForm(props) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [clientErrors, setClientErrors] = useState({});
//   const errors = {};

//   const runClientValidation = () => {
//     if (title.trim().length === 0) {
//       errors.title = "Title cannot be empty";
//     }
//     if (description.trim().length === 0) {
//       errors.description = "Description cannot be empty";
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     runClientValidation();
//     if (Object.keys(errors).length === 0) {
//       const newTask = {
//         id: Number(new Date()),
//         title: title,
//         description: description,
//         isCompleted: false,
//       };
//       props.handleAddTask(newTask);
//       setClientErrors({});
//       setTitle("");
//       setDescription("");
//     } else {
//       setClientErrors(errors);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Task</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Enter Title</label>
//         <br />
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         {clientErrors.title && <b>{clientErrors.title}</b>}
//         <br />

//         <label htmlFor="description">Enter Description</label>
//         <br />
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//         <br />
//         {clientErrors.description && <b>{clientErrors.description}</b>}
//         <br />

//         <input type="submit" value="Add Task" />
//       </form>
//     </div>
//   );
// }

/// using useReducer in redux
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTask } from "../features/tasks/taskslice";

// export default function TaskForm() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [clientErrors, setClientErrors] = useState({});
//   const dispatch = useDispatch();

//   const errors = {};

//   const runClientValidation = () => {
//     if (title.trim().length === 0) {
//       errors.title = "Title cannot be empty";
//     }
//     if (description.trim().length === 0) {
//       errors.description = "Description cannot be empty";
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     runClientValidation();
//     if (Object.keys(errors).length === 0) {
//       const newTask = {
//         id: Number(new Date()),
//         title: title,
//         description: description,
//         isCompleted: false,
//       };
//       dispatch(addTask(newTask));
//       setClientErrors({});
//       setTitle("");
//       setDescription("");
//     } else {
//       setClientErrors(errors);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Task</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Enter Title</label>
//         <br />
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         {clientErrors.title && <b>{clientErrors.title}</b>}
//         <br />

//         <label htmlFor="description">Enter Description</label>
//         <br />
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//         <br />
//         {clientErrors.description && <b>{clientErrors.description}</b>}
//         <br />

//         <input type="submit" value="Add Task" />
//       </form>
//     </div>
//   );
// }

// using useEffect in redux
import React, { useState } from "react";

export default function TaskForm({ handleAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [clientErrors, setClientErrors] = useState({});
  const errors = {};

  const runClientValidation = () => {
    if (title.trim().length === 0) {
      errors.title = "Title cannot be empty";
    }
    if (description.trim().length === 0) {
      errors.description = "Description cannot be empty";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runClientValidation();
    if (Object.keys(errors).length === 0) {
      const newTask = {
        id: Number(new Date()),
        title: title,
        description: description,
        isCompleted: false,
      };
      handleAddTask(newTask);
      setClientErrors({});
      setTitle("");
      setDescription("");
    } else {
      setClientErrors(errors);
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Enter Title</label>
        <br />
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        {clientErrors.title && <b>{clientErrors.title}</b>}
        <br />

        <label htmlFor="description">Enter Description</label>
        <br />
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        {clientErrors.description && <b>{clientErrors.description}</b>}
        <br />

        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
}
