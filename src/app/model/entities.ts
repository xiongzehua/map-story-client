export class StoryMapping {
  public id: number;
  public name: string;
}

export class Card {
  public id: number;
  public content: string;
}

export class User {
  constructor(
    public id: number,
    public username: String,
    public password: String
  ) {}
}
