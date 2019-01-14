import {Card, StoryMapping, User} from '../model/entities';

export const storyMappings: StoryMapping[] = [
  {id: 1, name: '项目1'},
  {id: 2, name: '项目2'},
  {id: 3, name: '项目3'},
  {id: 4, name: '项目4'},
];

export const cards: Card[] = [
  {id: 1, content: '卡片1 最多20个字字字字字字字字字字字字字字字字字字'},
  {id: 2, content: '卡片2 最多20个字字字字字字字字字字字字字字字字字字'},
  {id: 3, content: '卡片3 最多20个字字字字字字字字字字字字字字字字字字'},
  {id: 4, content: '卡片4 最多20个字字字字字字字字字字字字字字字字字字'},
  {id: 5, content: '卡片5 最多20个字字字字字字字字字字字字字字字字字字'},
  {id: 6, content: '卡片6 最多20个字字字字字字字字字字字字字字字字字字'},
];

export const user: User = {
  id: 1,
  username: "Yobol",
  password: "123456"
}
