import { useSkill } from "@pages/jobs/jobs.services";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./skill-card.module.scss";
import SkillCardSkeleton from "./skill-card.skeleton";

type Props = { id: string };

const SkillCard = ({ id }: Props) => {
  const { data, isLoading } = useSkill(id);

  if (isLoading) return <SkillCardSkeleton />;
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      custom={id}
      transition={{ duration: 0.2 }}
      className={styles.container}
    >
      <Link to={`/skills/${id}`}>
        <h3 className={styles.title}>{data?.data.skill.attributes.name}</h3>
      </Link>
      <p className={styles.description}>
        {(data?.data.skill.attributes as any)?.description ??
          "No API data provided"}
      </p>
      <div className={styles.attributes}>
        <p>
          <b>Type:</b> {data?.data.skill.attributes.type}
        </p>
        <p>
          <b>Importance:</b> {data?.data.skill.attributes.importance}
        </p>
        <p>
          <b>Level:</b> {data?.data.skill.attributes.level}
        </p>
      </div>
    </motion.li>
  );
};

export default SkillCard;
