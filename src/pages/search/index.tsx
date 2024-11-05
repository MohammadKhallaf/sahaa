import JobCard from "@components/job-card";
import JobCardSkeleton from "@components/job-card/job-card.skeleton";
import PageContainer from "@components/page.container";
import { addHistory } from "@store/history/history.actions";
import { useAppDispatch, useAppSelector } from "@store/store.hooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useJobSearch } from "./search.services";

import SideList from "@components/side-list";

import styles from "./search.module.scss";

const SearchPage = () => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const history = useAppSelector((state) => state.history);

  const query = searchParams.get("query") ?? "";

  const { data, isLoading } = useJobSearch(query?.toLowerCase());

  useEffect(() => {
    if (data) dispatch(addHistory(query));
  }, [data]);

  return (
    <PageContainer
      title="Search"
      header={
        <h2>
          {query && `"${query}"`} jobs ({data?.data.meta.count ?? 0})
        </h2>
      }
    >
      <div className={styles.container}>
        <section className={styles.container__results}>
          {!isLoading && !data?.data.jobs.length && !!query && (
            <p>No jobs found for "{query}"</p>
          )}
          {!isLoading && !data?.data.jobs.length && !query && (
            <p>
              Enter keywords (at least 3 characters) to search for the required
              job
            </p>
          )}
          <ul className="jobs-container">
            {data?.data.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            {isLoading && (
              <>
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
              </>
            )}
          </ul>
        </section>
        <SideList
          title="History"
          list={history.map((job) => ({
            title: job,
            to: `/search?query=${job}`,
          }))}
        />
      </div>
    </PageContainer>
  );
};

export default SearchPage;
