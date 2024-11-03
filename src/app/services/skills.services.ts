import api from "@app/api";

export const skillGetOne = (uuid: string) =>
  api.get<ISkillResponse>(`/skill/${uuid}`).then(({ data }) => data);
