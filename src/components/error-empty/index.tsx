import VoidSVG from "@assets/void.svg?react";
import { motion } from "framer-motion";
import cn from "clsx";

import styles from "./error-empty.module.scss";

type Props = {
  title?: string;
  message?: string;
  action?: React.ReactNode;
  className?: string;
};

const ErrorEmpty = ({
  title = "No data found",
  message = "We couldn't find what you're looking for",
  action,
  className,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(styles.container, className)}
    >
      <motion.div
        className={styles.illustration}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <VoidSVG />
      </motion.div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className={styles.title}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className={styles.message}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6 }}
        >
          {message}
        </motion.p>
        {action && (
          <motion.div
            className={styles.action}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {action}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ErrorEmpty;
