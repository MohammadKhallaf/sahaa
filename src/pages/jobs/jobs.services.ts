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
