// //using useState in redux

// import TaskItem from "./TaskItem";
// import { useState } from "react";

// export default function TaskList(props) {
//   const { tasks, handleRemoveTask, handleUpdateState, handleEditTask } = props;
//   const [selectedStatus, setSelectedStatus] = useState("all");
//   const statusTypes = ["all", "completed", "pending"];

//   const filterTasksByStatus = () => {
//     if (selectedStatus === "all") {
//       return tasks;
//     } else if (selectedStatus === "completed") {
//       return tasks.filter((ele) => ele.isCompleted);
//     } else if (selectedStatus === "pending") {
//       return tasks.filter((ele) => !ele.isCompleted);
//     }
//   };

//   return (
//     <div>
//       {statusTypes.map((status) => (
//         <div key={status}>
//           <input
//             type="radio"
//             name="status"
//             id={status}
//             checked={selectedStatus === status}
//             onChange={() => setSelectedStatus(status)}
//           />
//           <label htmlFor={status}>
//             {status[0].toUpperCase() + status.slice(1).toLowerCase()}
//           </label>
//         </div>
//       ))}
//       <ul>
//         {filterTasksByStatus().map((ele) => (
//           <TaskItem
//             key={ele.id}
//             title={ele.title}
//             id={ele.id}
//             description={ele.description}
//             isCompleted={ele.isCompleted}
//             handleRemoveTask={handleRemoveTask}
//             handleUpdateState={handleUpdateState}
//             handleEditTask={handleEditTask}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// using useReducer in redux
// import TaskItem from "./TaskItem";
// import { useState } from "react";

// export default function TaskList(props) {
//   const { tasks, handleRemoveTask, handleUpdateState, handleEditTask } = props;
//   const [selectedStatus, setSelectedStatus] = useState("all");
//   const statusTypes = ["all", "completed", "pending"];

//   const filterTasksByStatus = () => {
//     if (selectedStatus === "all") {
//       return tasks;
//     } else if (selectedStatus === "completed") {
//       return tasks.filter((ele) => ele.isCompleted);
//     } else if (selectedStatus === "pending") {
//       return tasks.filter((ele) => !ele.isCompleted);
//     }
//   };

//   return (
//     <div>
//       {statusTypes.map((status) => (
//         <div key={status}>
//           <input
//             type="radio"
//             name="status"
//             id={status}
//             checked={selectedStatus === status}
//             onChange={() => setSelectedStatus(status)}
//           />
//           <label htmlFor={status}>
//             {status[0].toUpperCase() + status.slice(1).toLowerCase()}
//           </label>
//         </div>
//       ))}
//       <ul>
//         {filterTasksByStatus().map((ele) => (
//           <TaskItem
//             key={ele.id}
//             title={ele.title}
//             id={ele.id}
//             description={ele.description}
//             isCompleted={ele.isCompleted}
//             handleRemoveTask={handleRemoveTask}
//             handleUpdateState={handleUpdateState}
//             handleEditTask={handleEditTask}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// using useEffect in redux
import React, { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  handleRemoveTask,
  handleUpdateState,
  handleEditTask,
}) {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const statusTypes = ["all", "completed", "pending"];

  const filterTasksByStatus = () => {
    if (selectedStatus === "all") {
      return tasks;
    } else if (selectedStatus === "completed") {
      return tasks.filter((task) => task.isCompleted);
    } else if (selectedStatus === "pending") {
      return tasks.filter((task) => !task.isCompleted);
    }
  };

  return (
    <div>
      {statusTypes.map((status) => (
        <div key={status}>
          <input
            type="radio"
            name="status"
            id={status}
            checked={selectedStatus === status}
            onChange={() => setSelectedStatus(status)}
          />
          <label htmlFor={status}>
            {status[0].toUpperCase() + status.slice(1).toLowerCase()}
          </label>
        </div>
      ))}
      <ul>
        {filterTasksByStatus().map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            isCompleted={task.isCompleted}
            handleRemoveTask={handleRemoveTask}
            handleUpdateState={handleUpdateState}
            handleEditTask={handleEditTask}
          />
        ))}
      </ul>
    </div>
  );
}
