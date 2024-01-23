import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderPage from "./components/order-page/OrderPage";
import Board from "./components/Board";
import "./App.css";

// const AppLayout = () => (
//   <React.Fragment>
//     <OrderPage />
//   </React.Fragment>
// );

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Task 1" },
    "task-2": { id: "task-2", content: "Task 2" },
    "task-3": { id: "task-3", content: "Task 3" },
    "task-4": { id: "task-4", content: "Task 4" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

const App = () => {
  return (
    <div className="App d-flex flex-column">
      <div>
        <h1>My Pizza Shop</h1>
      </div>
      <OrderPage />
      <Board initialData={initialData} />
    </div>
  );
};

export default App;
