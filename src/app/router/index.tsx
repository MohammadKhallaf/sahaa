import { createBrowserRouter, Navigate } from "react-router-dom";

import { EROUTES } from "@app/constants";

import RootLayout from "@layouts/root.layout";
import SearchLayout from "@layouts/search.layout";

import JobsPage from "@pages/jobs";
import JobDetails from "@pages/jobs/job-details";
import SearchPage from "@pages/search";
import SkillDetails from "@pages/skills/skill-details";

export default createBrowserRouter([
  {
    path: EROUTES.ROOT,
    element: <RootLayout />,
    children: [
      {
        path: EROUTES.ROOT,
        element: <SearchLayout />,
        children: [
          {
            path: EROUTES.JOBS,
            children: [
              { index: true, element: <JobsPage /> },
              { path: ":uuid", element: <JobDetails /> },
              {
                path: EROUTES.NOT_FOUND,
                element: <Navigate to={EROUTES.JOBS} />,
              },
            ],
          },

          { path: `${EROUTES.SKILLS}/:uuid`, element: <SkillDetails /> },
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
