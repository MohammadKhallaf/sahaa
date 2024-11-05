import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./job-row.module.scss";
import JobRowSkeleton from "./job-row.skeleton";
import { useJobDetails } from "@pages/jobs/jobs.services";
import SkillBadge from "@components/skill-badge/skill-badge.component";

type Props = { id: string };

const JobRow = ({ id }: Props) => {
  const { data, isLoading } = useJobDetails(id);

  if (isLoading) return <JobRowSkeleton />;

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      custom={id}
      transition={{ duration: 0.2 }}
      className={styles.container}
    >
      <Link to={`/jobs/${id}`}>
        <h3 className={styles.title}>{data?.data.job.attributes.title}</h3>
      </Link>
      <p className={styles.description}>
        {(data?.data.job.attributes as any).description ??
          "No description available"}
      </p>
      <div className={styles.skills}>
        {data?.data.job.relationships.skills.map((skill) => (
          <AnimatePresence key={skill.id}>
            <SkillBadge id={skill.id} />
          </AnimatePresence>
        ))}
      </div>
    </motion.li>
  );
};

export default JobRow;
