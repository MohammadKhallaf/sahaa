interface JobAttributes {
  title: string;
}

interface JobRelationships {
  skills: IRelationship[];
}

interface IJob extends IEntity {
  attributes: JobAttributes;
  relationships: JobRelationships;
}

interface IJobListResponse
  extends IResponse<{
    jobs: IJob[];
    meta: Meta;
  }> {}
