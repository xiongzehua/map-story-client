export class Project {
  public projectId?: string;
  public projectTitle?: string;
  public projectContent?: string;
  public ownerId?: string;
  public ownerEmail?: string;
  public ownerName?: string;
  public cards?: Card[][];
  public projectCards?: string;
  public contributors?: Contributor[];
}

export class Card {
  public id?: number;
  public content: string;
}

export class User {
  public userId?: string;
  public userName?: string;
  public userPassword?: string;
  public userEmail?: string;
  public userToken?: string;
}

export class Contributor {
  public contributorId?: string;
  public contributorEmail?: string;
  public contributorName?: string;
}

export class MyResponse {
  public code?: number;
  public data?: any;
}
