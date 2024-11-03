interface ISkillAttributes {
  name: string;
  type: string;
  importance: string;
  level: string;
}
interface ISkillRelationships {
  jobs: Relationship[];
  skills: Relationship[];
}

interface ISkill extends Entity {
  attributes: ISkillAttributes;
  relationships: ISkillRelationships;
}

interface ISkillResponse
  extends IResponse<{
    skill: ISkill;
  }> {}
