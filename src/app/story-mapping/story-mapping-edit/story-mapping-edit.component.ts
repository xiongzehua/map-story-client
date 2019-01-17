import { Component, OnInit } from '@angular/core';
import {Card} from '../../model/entities';
import {StoryMappingService} from '../../service/story-mapping.service';

@Component({
  selector: 'app-map-edit',
  templateUrl: './story-mapping-edit.component.html',
  styleUrls: ['./story-mapping-edit.component.less']
})
export class StoryMappingEditComponent implements OnInit {
  cards: Card[][];
  constructor(
    private storyMappingService: StoryMappingService,
  ) { }

  ngOnInit() {
    this.listCard();
  }
  listCard() {
    this.storyMappingService.getCards(1).subscribe(
      items => {
        this.cards = items;
      }
    );
  }
  addCardToRelease(release: Card[]) {
    release.push({
      id: 10,
      content: '这是添加的顶顶顶顶顶顶'
    });
  }
  addRelease() {
    this.cards.push([]);
  }
  getReleaseInfo(index: number) {
    if (index === 0) {
      return 'User activities';
    } else if (index === 1) {
      return 'User tasks';
    } else {
      return `User stories Release${index - 1}`;
    }
  }
}
