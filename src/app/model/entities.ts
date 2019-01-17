export class StoryMapping {
  public id: number;
  public name: string;
  public cards: Card[][];
}

export class Card {
  public id?: number;
  public content: string;
}

export class Release {
  public index: number;
  public cards: Card[];
  public info(): string {
    if (this.index === -1) {
      return 'User activities';
    } else if (this.index === 0) {
      return 'User tasks';
    } else {
      return `User stories Release${this.index}`;
    }
  }
}

export class User {
  constructor(
    public id: number,
    public username: String,
    public password: String
  ) {}
}
