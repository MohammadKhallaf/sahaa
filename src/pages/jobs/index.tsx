import PageContainer from "@components/page.container";
import { useJobListInfinite } from "./jobs.services";
import JobCard from "@components/job-card";
import styles from "./jobs.module.scss";
import { useCallback, useEffect, useRef } from "react";
import JobCardSkeleton from "@components/job-card/job-card.skeleton";

const JobsPage = () => {
  const observer = useRef<IntersectionObserver>();
  // const lastItemRef = useRef<HTMLLIElement>(null);
  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useJobListInfinite(6);

  const jobList = data?.pages.reduce(
    (acc, page) => [...acc, ...page.data.jobs],
    [] as IJob[]
  );

  const lastItemRef = useCallback(
    (node: HTMLLIElement) => {
      // remove the previous observer
      if (observer.current) observer.current.disconnect();

      // prevent observer in loading states and for !(hasNextPage)
      if (isLoading || !hasNextPage) return;

      // set the new observer
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage]
  );

  return (
    <PageContainer title="Jobs">
      <h1>Jobs ({data?.pages[0].data.meta.count})</h1>
      <ul className={styles["jobs-container"]}>
        {jobList?.map((job, idx, arr) => (
          <JobCard
            key={job.id}
            job={job}
            ref={idx === arr.length - 1 ? lastItemRef : null}
          />
        ))}{" "}
        {isFetchingNextPage && (
          <>
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
          </>
        )}
      </ul>
    </PageContainer>
  );
};

export default JobsPage;
