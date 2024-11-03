import { motion } from "framer-motion";
import { useSkill } from "../../pages/jobs/jobs.services";
import { skillBadgeVariants } from "./skill-badge.animation";
import styles from "./skill-badge.module.scss";
import SkillBadgeSkeleton from "./skill-badge.skeleton";

type Props = {  id: string;};

const SkillBadge = ({ id }: Props) => {
  const { data, isLoading } = useSkill(id);

  return isLoading ? (
    <SkillBadgeSkeleton />
  ) : (
    <motion.div
      className={styles.container}
      variants={skillBadgeVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      layout
    >
      {data?.data.skill.attributes.name}
    </motion.div>
  );
};

export default SkillBadge;
