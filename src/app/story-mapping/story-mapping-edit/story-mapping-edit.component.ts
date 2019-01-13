import { Component, OnInit } from '@angular/core';
import * as Konva from 'konva';
import {Card} from '../../model/entities';
import {StoryMappingService} from '../../service/story-mapping.service';

@Component({
  selector: 'app-map-edit',
  templateUrl: './story-mapping-edit.component.html',
  styleUrls: ['./story-mapping-edit.component.less']
})
export class StoryMappingEditComponent implements OnInit {
  cards: Card[];
  constructor(
    private storyMappingService: StoryMappingService,
  ) { }

  ngOnInit() {
    this.listCard();
  }
  listCard() {
    this.storyMappingService.listCard(1).subscribe(
      items => {
        this.cards = items;
      }
    );
  }
  addCard() {
    this.cards.push({
      id: 10,
      content: '这是添加的顶顶顶顶顶顶'
    });
  }
}
