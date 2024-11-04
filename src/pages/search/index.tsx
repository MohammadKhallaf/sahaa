import { useSearchParams } from "react-router-dom";
import { useJobSearch } from "./search.services";
import PageContainer from "@components/page.container";
import JobCard from "@components/job-card";
import JobCardSkeleton from "@components/job-card/job-card.skeleton";

import styles from "./search.module.scss";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const { data, isLoading } = useJobSearch(query?.toLowerCase());

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
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
};

export default SearchPage;
