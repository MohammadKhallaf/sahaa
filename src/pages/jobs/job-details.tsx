import PageContainer from "@components/page.container";
import SkillCard from "@components/skill-card";
import { useParams } from "react-router-dom";
import { useJobDetails } from "./jobs.services";
import styles from "./job-details.module.scss";
import SideList from "@components/side-list";
import { useAppSelector } from "@store/store.hooks";

const JobDetails = () => {
  const { uuid } = useParams();
  const { data } = useJobDetails(uuid!);

  const history = useAppSelector((state) => state.history);

  return (
    <PageContainer
      title={data?.data.job.attributes.title}
      header={<h2>{data?.data.job.attributes.title}</h2>}
    >
      <div className={styles.container}>
        <section className={styles.container__main}>
          <ul>
            {data?.data.job.relationships.skills.map(({ id }) => (
              <li key={id}>
                <SkillCard id={id} />
              </li>
            ))}
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

export default JobDetails;
