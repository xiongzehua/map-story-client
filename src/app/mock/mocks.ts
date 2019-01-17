import {Card, StoryMapping, User} from '../model/entities';

export const cards: Card[][] = [
  [
    {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
  ],
  [
    {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
  ],
];

export const storyMappings: StoryMapping[] = [
  {id: 1, name: '项目1', cards: cards},
  {id: 2, name: '项目2', cards: cards},
  {id: 3, name: '项目3', cards: cards},
  {id: 4, name: '项目4', cards: cards},
];

export const user: User = {
  id: 1,
  username: 'admin',
  password: '123456'
};
