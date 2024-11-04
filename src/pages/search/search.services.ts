import { EQUERIES } from "@app/constants";
import { jobSearch } from "@app/services";
import { useQuery } from "@tanstack/react-query";

export const useJobSearch = (query: string) => {
  return useQuery({
    queryKey: [EQUERIES.JOB_SEARCH, query],
    queryFn: () => jobSearch(query),
    enabled: !!query,
  });
};
