import { EROUTES } from "@app/constants";
import RootLayout from "@layouts/root.layout";
import SearchLayout from "@layouts/search.layout";
import JobsPage from "@pages/jobs";
import SearchPage from "@pages/search";
import { createBrowserRouter, Navigate } from "react-router-dom";

export default createBrowserRouter([
  {
    path: EROUTES.ROOT,
    element: <RootLayout />,
    children: [
      {
        path: EROUTES.ROOT,
        element: <SearchLayout />,
        children: [
          { path: EROUTES.JOBS, element: <JobsPage /> },
          { path: EROUTES.SKILLS, element: <div>Skills</div> },
          { path: EROUTES.SEARCH, element: <SearchPage /> },
        ],
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
