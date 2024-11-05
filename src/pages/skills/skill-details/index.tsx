import { EROUTES } from "@app/constants";
import PageContainer from "@components/page-container";
import SideList from "@components/side-list";
import { useParams } from "react-router-dom";
import { useGetRelatedSkills, useSkillDetails } from "../skills.services";
import styles from "./skill-details.module.scss";
import JobRow from "@components/job-row";
import JobRowSkeleton from "@components/job-row/job-row.skeleton";

const SkillDetails = () => {
  const { uuid = "" } = useParams();
  const { data, isLoading } = useSkillDetails(uuid);

  const relatedSkills =
    data?.data.skill.relationships.skills.map(({ id }) => id) ?? [];
  const { data: relatedInfo } = useGetRelatedSkills(uuid, relatedSkills);
  const relatedJobs = data?.data.skill.relationships.jobs;

  return (
    <PageContainer
      title={data?.data.skill.attributes.name ?? "Skill"}
      header={
        <h2>
          {data?.data.skill.attributes.name ?? "Loading skill details..."}
        </h2>
      }
    >
      <div className={styles.container}>
        <section className={styles.container__main}>
          <h3>Description</h3>
          <p>
            {(data?.data.skill.attributes as any).description ??
              "No description provided"}
          </p>
          <h3>Related Jobs</h3>
          <ul>
            {isLoading && (
              <>
                <JobRowSkeleton />
                <JobRowSkeleton />
                <JobRowSkeleton />
              </>
            )}
            {relatedJobs?.map(({ id }) => (
              <JobRow key={id} id={id} />
            ))}
          </ul>
        </section>
        <SideList
          title="Related Skills"
          list={
            relatedInfo?.map((skill) => ({
              title: skill.attributes.name,
              to: `${EROUTES.SKILLS}/${skill.id}`,
            })) ?? []
          }
        />
      </div>
    </PageContainer>
  );
};

export default SkillDetails;
