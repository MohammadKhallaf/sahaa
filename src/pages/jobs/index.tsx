import PageContainer from "@components/page.container";
import { useJobListInfinite } from "./jobs.services";
import JobCard from "@components/job-card/job-card.component";
import styles from "./jobs.module.scss";

const JobsPage = () => {
  const { data, hasNextPage, fetchNextPage } = useJobListInfinite(6);

  // create intersection observer to fetch next page
  if (hasNextPage) {
    fetchNextPage();
  }

  const jobList = data?.pages.reduce(
    (acc, page) => [...acc, ...page.data.jobs],
    [] as IJob[]
  );

  return (
    <PageContainer title="Jobs">
      <h1>Jobs ({data?.pages[0].data.meta.count})</h1>
      <section className={styles["jobs-container"]}>
        {jobList?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}{" "}
      </section>
    </PageContainer>
  );
};

export default JobsPage;
