import PageContainer from "@components/page.container";
import SideList from "@components/side-list";
import SkillCard from "@components/skill-card";
import { useParams } from "react-router-dom";
import { useGetRelatedJobs, useJobDetails } from "../jobs.services";

import { useMemo } from "react";
import styles from "./job-details.module.scss";
import SkillCardSkeleton from "@components/skill-card/skill-card.skeleton";
import { AnimatePresence } from "framer-motion";

const JobDetails = () => {
  const { uuid = "" } = useParams();
  const { data, isLoading } = useJobDetails(uuid);

  const relatedSkills =
    data?.data.job.relationships.skills.map(({ id }) => id) ?? [];

  const { data: relatedInfo } = useGetRelatedJobs(uuid, relatedSkills);

  const relatedJobs: IJob[] = useMemo(() => {
    if (!relatedInfo?.relatedJobs?.length) return [];

    const jobs = relatedInfo?.relatedJobs;
    return jobs;
  }, [relatedInfo]);

  return (
    <PageContainer
      title={data?.data.job.attributes.title ?? "Job"}
      header={
        <h2>{data?.data.job.attributes.title ?? "Loading job details..."}</h2>
      }
    >
      <div className={styles.container}>
        <section className={styles.container__main}>
          <h3>Related Skills</h3>
          <ul>
            {isLoading && (
              <>
                <SkillCardSkeleton />
                <SkillCardSkeleton />
                <SkillCardSkeleton />
              </>
            )}
            {relatedSkills.map((id) => (
              <AnimatePresence key={id}>
                <SkillCard id={id} />
              </AnimatePresence>
            ))}
          </ul>
        </section>
        <SideList
          title="Related Jobs"
          list={
            relatedJobs.map((job) => ({
              title: job.attributes.title,
              to: `/jobs/${job.id}`,
            })) ?? []
          }
        />
      </div>
    </PageContainer>
  );
};

export default JobDetails;
