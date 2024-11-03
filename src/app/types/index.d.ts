type UUID = string;

interface IEntity {
  id: UUID;
  type: "job" | "skill";
}

interface IRelationship<T = UUID> {
  id: T;
}

interface IResponse<T = { [string]: string }> {
  data: T;
}

interface Meta {
  next: number;
  count: number;
}

interface IPagination {
  cursor?: number;
  limit?: number;
}
