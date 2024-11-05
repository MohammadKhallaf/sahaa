import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./side-list.module.scss";

type Props = {
  title: string;
  list: {
    title: string;
    to: string;
    tip?: string;
  }[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const SideList = ({ title, list }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.aside
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h4>{title}</h4>
        <motion.ul>
          {list.map((item, index) => (
            <motion.li
              key={item.title}
              custom={index}
              title={item.tip || item.title}
              variants={itemVariants}
            >
              <Link to={item.to}>{item.title}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.aside>
    </AnimatePresence>
  );
};

export default SideList;
