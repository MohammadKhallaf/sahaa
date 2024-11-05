import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./side-list.module.scss";
import { containerVariants, itemVariants } from "./side-list.animation";

type Props = {
  title: string;
  list: {
    title: string;
    to: string;
    tip?: string;
  }[];
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
