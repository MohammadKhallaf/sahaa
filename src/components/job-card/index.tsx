import { EROUTES } from "@app/constants/routes";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import SkillBadge from "../skill-badge/skill-badge.component";
import styles from "./job-card.module.scss";

type Props = {
  job: IJob;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      bounce: 0.3,
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.01,
    transition: {
      duration: 0.2,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const skillsContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const JobCard = forwardRef<HTMLLIElement, Props>(({ job }, ref) => {
  return (
    <motion.li
      ref={ref}
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={styles.container}
    >
      <motion.h3 layout="position">{job.attributes.title}</motion.h3>

      <motion.h6 layout="position">Related skills</motion.h6>

      <motion.div
        className={styles.skills}
        variants={skillsContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {job.relationships.skills.map((skill) => (
          <AnimatePresence key={skill.id}>
            <SkillBadge id={skill.id} />
          </AnimatePresence>
        ))}
      </motion.div>
      <Link to={`${EROUTES.JOBS}/${job.id}`}>View Job Details</Link>
    </motion.li>
  );
});

JobCard.displayName = "JobCard";

export default JobCard;
