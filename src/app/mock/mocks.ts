import {Card, Project, User} from '../model/entities';

export const cards: Card[][] = [
  [
    {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
  ],
  [
    {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
  ],
];
// TODO
// 1 删除和添加在不在同一层级，不同一层级丢失列表引用
// 2 要不要每一次删除和修改都发请求，不过要每次都发请求那么双层数组的结构可能要修改
// 3 双层数组数据库怎么保存
export const storyMappings: Project[] = [
  {id: 1, name: '项目1', cards: [
      [
        {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
      ],
      [
        {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
      ],
    ]},
  {id: 2, name: '项目2', cards: [
      [
        {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
      ],
      [
        {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
      ],
    ]},
  {id: 3, name: '项目3', cards: [
      [
        {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
      ],
      [
        {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
      ],
    ]},
  {id: 4, name: '项目4', cards: [
      [
        {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
      ],
      [
        {content: 'card1'}, {content: 'card2'}, {content: 'card3'}, {content: 'card4'}
      ],
    ]},
];

export const user: User = {
  id: 1,
  username: 'admin',
  password: '123456'
};
