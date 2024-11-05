import { useSkill } from "@pages/jobs/jobs.services";

type Props = { id: string };

const SkillCard = ({ id }: Props) => {
  const { data } = useSkill(id);
  return (
    <li>
      <h3>{data?.data.skill.attributes.name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        odit iste reiciendis? Porro iusto quas alias enim ipsum optio excepturi
        possimus asperiores rerum, natus odio quia? Nesciunt recusandae
        laboriosam ipsum!
      </p>
    </li>
  );
};

export default SkillCard;
