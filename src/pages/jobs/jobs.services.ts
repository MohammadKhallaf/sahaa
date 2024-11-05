import { EQUERIES } from "@app/constants";
import { jobGetAll, jobGetOne, skillGetOne } from "@app/services";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useJobListInfinite = (limit: number) => {
  return useInfiniteQuery({
    queryKey: [EQUERIES.JOB_GET_ALL],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => jobGetAll({ cursor: pageParam, limit }),
    getNextPageParam: ({ data }) => data.meta?.next,
  });
};

export const useJobDetails = (uuid: string) => {
  return useQuery({
    queryKey: [EQUERIES.JOB_GET_ONE, uuid],
    queryFn: () => jobGetOne(uuid),
    enabled: !!uuid,
  });
};

export const useSkill = (uuid: string) => {
  return useQuery({
    queryKey: [EQUERIES.SKILL_GET_ONE, uuid],
    queryFn: () => skillGetOne(uuid),
  });
};

// API do not supply related jobs directly
// we will get them from the related skills
export const useGetRelatedJobs = (uuid: string, skills: string[]) => {
  return useQuery({
    queryKey: [EQUERIES.JOB_RELATED_SKILLS, uuid],

    queryFn: async () => {
      const relatedSkills = await Promise.all(
        skills.map(async (id) => await skillGetOne(id))
      );

      // every skill has related jobs (ids)
      const relatedJobs = await Promise.all(
        relatedSkills
          .map(({ data }) => data?.skill.relationships.jobs)
          .flat()
          .map(
            async ({ id }) => await jobGetOne(id).then(({ data }) => data.job)
          )
      );

      const uniqueRelatedJobs = new Map(
        relatedJobs.map((job) => [job.id, job])
      );

      return {
        relatedSkills,
        relatedJobs: Array.from(uniqueRelatedJobs.values()),
      };
    },
    enabled: !!uuid && !!skills?.length,
  });
};
