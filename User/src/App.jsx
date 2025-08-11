import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
