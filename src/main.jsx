import React from "react";
import ReactDOM from "react-dom/client";
import FormLoginPage from "./formLogin.jsx";
import Login from "./pages/login.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FormLoginPage>
        <Login />
      </FormLoginPage>
    ),
  },
  {
    path: "/register",
    element: (
      <FormLoginPage>
        <Register />
      </FormLoginPage>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
