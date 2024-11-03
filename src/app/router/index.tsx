import { EROUTES } from "@app/constants";
import RootLayout from "@layouts/root.layout";
import JobsPage from "@pages/jobs";
import { createBrowserRouter, Navigate } from "react-router-dom";

export default createBrowserRouter([
  {
    path: EROUTES.ROOT,
    element: <RootLayout />,
    children: [
      {
        path: EROUTES.JOBS,
        element: <JobsPage />,
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