import { motion } from "framer-motion";
import { skillBadgeVariants } from "./skill-badge.animation";
import styles from "./skill-badge.module.scss";
import SkillBadgeSkeleton from "./skill-badge.skeleton";
import { useSkillDetails } from "@pages/skills/skills.services";
import { Link } from "react-router-dom";
import { EROUTES } from "@app/constants";

type Props = { id: string };

const AnimatedLink = motion(Link);

const SkillBadge = ({ id }: Props) => {
  const { data, isLoading } = useSkillDetails(id);

  return isLoading ? (
    <SkillBadgeSkeleton />
  ) : (
    <AnimatedLink
      to={`${EROUTES.SKILLS}/${id}`}
      className={styles.container}
      variants={skillBadgeVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      layout
    >
      {data?.data.skill.attributes.name}
    </AnimatedLink>
  );
};

export default SkillBadge;
