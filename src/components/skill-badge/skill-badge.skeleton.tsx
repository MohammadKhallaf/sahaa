import { motion } from "framer-motion";
import styles from "./skill-badge.module.scss";

const SkillBadgeSkeleton = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.skeleton}
    />
  );
};

export default SkillBadgeSkeleton;
