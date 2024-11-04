import api from "@app/api";

export const jobGetAll = ({ cursor = 0, limit = 10 }: IPagination) =>
  api
    .get<IJobListResponse>("/jobs", { params: { cursor, limit } })
    .then(({ data }) => data);

export const jobGetOne = (uuid: string) =>
  api.get(`/job/${uuid}`).then(({ data }) => data);

export const jobSearch = (query: string) =>
  api
    .get<IJobListResponse>("/jobs/search", { params: { query } })
    .then(({ data }) => data);
