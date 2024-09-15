// //using usestae in redux

// import { useState } from "react";

// export default function TaskItem(props) {
//   const {
//     id,
//     title,
//     description,
//     isCompleted,
//     handleRemoveTask,
//     handleUpdateState,
//     handleEditTask,
//   } = props;

//   const [isEditing, setIsEditing] = useState(false);
//   const [newTitle, setNewTitle] = useState(title);
//   const [newDescription, setNewDescription] = useState(description);

//   const handleRemove = (id) => {
//     const userConfirm = window.confirm("Are you sure?");
//     if (userConfirm) {
//       handleRemoveTask(id);
//     }
//   };

//   const handleChange = () => {
//     handleUpdateState(id);
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     handleEditTask(id, newTitle, newDescription);
//     setIsEditing(false);
//   };

//   return (
//     <li>
//       <input type="checkbox" checked={isCompleted} onChange={handleChange} />
//       {isEditing ? (
//         <form onSubmit={handleEditSubmit}>
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//           <textarea
//             value={newDescription}
//             onChange={(e) => setNewDescription(e.target.value)}
//           ></textarea>
//           <button type="submit">Save</button>
//           <button type="button" onClick={() => setIsEditing(false)}>
//             Cancel
//           </button>
//         </form>
//       ) : (
//         <>
//           {title} - {description}
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//           <button onClick={() => handleRemove(id)}>Remove</button>
//         </>
//       )}
//     </li>
//   );
// }

//using useReducer in redux
// import { useState } from "react";
// export default function TaskItem(props) {
//   const {
//     id,
//     title,
//     description,
//     isCompleted,
//     handleRemoveTask,
//     handleUpdateState,
//     handleEditTask,
//   } = props;

//   const [isEditing, setIsEditing] = useState(false);
//   const [newTitle, setNewTitle] = useState(title);
//   const [newDescription, setNewDescription] = useState(description);

//   const handleRemove = (id) => {
//     const userConfirm = window.confirm("Are you sure?");
//     if (userConfirm) {
//       handleRemoveTask(id);
//     }
//   };

//   const handleChange = () => {
//     handleUpdateState(id);
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     handleEditTask(id, newTitle, newDescription);
//     setIsEditing(false);
//   };

//   return (
//     <li>
//       <input type="checkbox" checked={isCompleted} onChange={handleChange} />
//       {isEditing ? (
//         <form onSubmit={handleEditSubmit}>
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//           <textarea
//             value={newDescription}
//             onChange={(e) => setNewDescription(e.target.value)}
//           ></textarea>
//           <button type="submit">Save</button>
//           <button type="button" onClick={() => setIsEditing(false)}>
//             Cancel
//           </button>
//         </form>
//       ) : (
//         <>
//           {title} - {description}
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//           <button onClick={() => handleRemove(id)}>Remove</button>
//         </>
//       )}
//     </li>
//   );
// }

// using useEffect in redux
import React, { useState } from "react";

export default function TaskItem({
  id,
  title,
  description,
  isCompleted,
  handleRemoveTask,
  handleUpdateState,
  handleEditTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleRemove = () => {
    const userConfirm = window.confirm("Are you sure?");
    if (userConfirm) {
      handleRemoveTask(id);
    }
  };

  const handleChange = () => {
    handleUpdateState(id);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleEditTask(id, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={handleChange} />
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          ></textarea>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          {title} - {description}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </>
      )}
    </li>
  );
}
