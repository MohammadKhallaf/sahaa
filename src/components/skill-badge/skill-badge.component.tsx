import { useSkill } from "../../pages/jobs/jobs.services";
import styles from "./skill-badge.module.scss";

type Props = {
  id: string;
};

const SkillBadge = ({ id }: Props) => {
  const { data } = useSkill(id);
  return (
    <div className={styles.container}>{data?.data.skill.attributes.name}</div>
  );
};

export default SkillBadge;
