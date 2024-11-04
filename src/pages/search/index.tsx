import JobCard from "@components/job-card";
import JobCardSkeleton from "@components/job-card/job-card.skeleton";
import PageContainer from "@components/page.container";
import { useSearchParams } from "react-router-dom";
import { useJobSearch } from "./search.services";

import { addHistory } from "@store/history/history.actions";
import { useAppDispatch, useAppSelector } from "@store/store.hooks";
import { useEffect } from "react";
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
    <PageContainer title="Search">
      <h2>
        {query && `"${query}"`} jobs ({data?.data.meta.count ?? 0})
      </h2>

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
        <aside className={styles.history}>
          <h4>History</h4>
          <ul>
            {history.map((job) => (
              <li key={job}>{job}</li>
            ))}
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
};

export default SearchPage;
