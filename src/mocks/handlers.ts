import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("*/jobs", () => {
    return HttpResponse.json({
      data: {
        jobs: [],
        meta: {
          next: null,
          total: 0,
        },
      },
    });
  }),

  http.get("/jobs/search", () => {
    return HttpResponse.json({
      data: {
        jobs: [],
        meta: {
          next: null,
          total: 0,
        },
      },
    });
  }),
];
