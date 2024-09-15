// // using useStae in redux
// import React from "react";
// import TaskManager from "./components/TaskManager";
// import { Provider } from "react-redux";
// import { store } from "./store";

// export default function App() {
//   return (
//     <Provider store={store}>
//       <div>
//         <TaskManager />
//       </div>
//     </Provider>
//   );
// }

//// using useReducer in redux
// import React from "react";
// import TaskManager from "./components/TaskManager";
// import { Provider } from "react-redux";
// import { store } from "./store";

// export default function App() {
//   return (
//     <Provider store={store}>
//       <div>
//         <TaskManager />
//       </div>
//     </Provider>
//   );
// }

// using useEffect in redux
import React from "react";
import TaskManager from "./components/TaskManager";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <TaskManager />
      </div>
    </Provider>
  );
}
