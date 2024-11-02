import RootLayout from "@components/layouts/root.layout";
import { createBrowserRouter, Navigate } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/jobs",
        element: <div>Jobs</div>,
      },
      {
        path: "/skills",
        element: <div>Skills</div>,
      },
      {
        path: "*",
        element: <Navigate to="/jobs" />,
      },
      {
        index: true,
        element: <Navigate to="/jobs" />,
      },
    ],
  },
]);
