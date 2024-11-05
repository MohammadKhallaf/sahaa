import { EQUERIES } from "@app/constants";
import { skillGetOne } from "@app/services";
import { useQuery } from "@tanstack/react-query";

export const useSkillDetails = (uuid: string) => {
  return useQuery({
    queryKey: [EQUERIES.SKILL_GET_ONE, uuid],
    queryFn: () => skillGetOne(uuid),
  });
};

export const useGetRelatedSkills = (uuid: string, skills: string[]) => {
  return useQuery({
    queryKey: [EQUERIES.SKILLS_RELATED_SKILLS, uuid],
    queryFn: async () => {
      const relatedSkills = await Promise.all(
        skills.map(
          async (id) => await skillGetOne(id).then(({ data }) => data.skill)
        )
      );
      const uniqueRelatedSkills = new Map(
        relatedSkills.map((skill) => [skill.id, skill])
      );
      return Array.from(uniqueRelatedSkills.values());
    },
    enabled: !!uuid && !!skills.length,
  });
};
