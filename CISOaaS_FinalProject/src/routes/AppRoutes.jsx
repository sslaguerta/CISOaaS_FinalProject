import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "../pages/LogIn";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
