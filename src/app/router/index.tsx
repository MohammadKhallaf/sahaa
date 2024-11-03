import RootLayout from "@components/layouts/root.layout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { EROUTES } from "./routes";

export default createBrowserRouter([
  {
    path: EROUTES.ROOT,
    element: <RootLayout />,
    children: [
      {
        path: EROUTES.JOBS,
        element: <div>Jobs</div>,
      },
      {
        path: EROUTES.SKILLS,
        element: <div>Skills</div>,
      },
      {
        path: EROUTES.SEARCH,
        element: <div>Search</div>,
      },
      {
        path: EROUTES.HISTORY,
        element: <div>History</div>,
      },
      {
        path: EROUTES.NOT_FOUND,
        element: <Navigate to={EROUTES.JOBS} />,
      },
      {
        index: true,
        element: <Navigate to={EROUTES.JOBS} />,
      },
    ],
  },
]);
