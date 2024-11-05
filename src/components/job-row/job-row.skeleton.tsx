import cn from "clsx";
import { motion } from "framer-motion";

import styles from "./job-row.module.scss";

const JobRowSkeleton = () => {
  return (
    <motion.li
      className={cn(styles.container, styles.skeleton)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.title}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className={styles.description}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <div className={styles.attributes}>
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={styles.attribute}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    </motion.li>
  );
};

export default JobRowSkeleton;
