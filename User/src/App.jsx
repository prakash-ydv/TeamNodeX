import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage/>
  },
  {
    path : "/hello",
    element : <p>Hello</p>
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
