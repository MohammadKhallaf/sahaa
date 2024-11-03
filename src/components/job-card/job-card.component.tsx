import { Link } from "react-router-dom";
import styles from "./job-card.module.scss";
import { EROUTES } from "@app/constants/routes";
import SkillBadge from "../skill-badge/skill-badge.component";
import { motion } from "framer-motion";

type Props = {
  job: IJob;
};

const JobCard = ({ job }: Props) => {
  return (
    <motion.article
      layout
      transition={{
        duration: 0.2,
        type: "spring",
        bounce: 0.5,
        stiffness: 200,
      }}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.container}
    >
      <h3>{job.attributes.title}</h3>

      <h6>Related skills</h6>
      <div className={styles.skills}>
        {job.relationships.skills.map((skill) => (
          <SkillBadge id={skill.id} key={skill.id} />
        ))}
      </div>
      <Link to={`${EROUTES.JOBS}/${job.id}`}>View Job Details</Link>
    </motion.article>
  );
};

export default JobCard;
