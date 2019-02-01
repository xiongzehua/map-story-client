import {Component, Input, OnInit} from '@angular/core';
import {Card, StoryMapping} from '../../model/entities';
import {StoryMappingService} from '../../service/story-mapping.service';
import {NzModalService} from 'ng-zorro-antd';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-map-edit',
  templateUrl: './story-mapping-edit.component.html',
  styleUrls: ['./story-mapping-edit.component.less']
})
export class StoryMappingEditComponent implements OnInit {

  currentStoryMapping = null;

  addCardModalVisible = false;
  editCardModalVisible = false;
  currentCard = {
    i: -1,
    j: -1,
    content: '',
  };
  cards: Card[][];
  constructor(
    private location: PlatformLocation,
    private storyMappingService: StoryMappingService,
    private modalService: NzModalService
  ) {
   }

  ngOnInit() {
    this.setCurrentStoryMapping(+this.location.pathname.split("/").pop());
    this.listCard();
  }

  setCurrentStoryMapping(id: number): void {
    this.storyMappingService.currentStoryMapping(id).subscribe(
      mapping => {
        console.log(mapping);
        this.currentStoryMapping = mapping;
      }
    );
  }

  showEditCardModal(i: number, j: number): void {
    this.currentCard.i = i;
    this.currentCard.j = j;
    this.currentCard.content = this.cards[i][j].content;
    this.editCardModalVisible = true;
  }
  showAddCardModal(i: number): void {
    this.currentCard.i = i;
    this.currentCard.j = this.cards[i].length;
    this.currentCard.content = '';
    this.addCardModalVisible = true;
  }
  addCardOk(): void {
    console.log('Button ok clicked!');
    const newCard = {
      content: this.currentCard.content,
    };
    this.cards[this.currentCard.i].push(newCard);
    this.addCardModalVisible = false;
  }

  addCardCancel(): void {
    console.log('Button cancel clicked!');
    this.addCardModalVisible = false;
  }

  editCardOk(): void {
    console.log('Button ok clicked!');
    this.cards[this.currentCard.i][this.currentCard.j].content = this.currentCard.content;
    this.editCardModalVisible = false;
  }

  editCardDelete(): void {
    console.log('Button ok clicked!');
    this.cards[this.currentCard.i].splice(this.currentCard.j, 1);
    this.editCardModalVisible = false;
  }

  editCardCancel(): void {
    console.log('Button cancel clicked!');
    this.editCardModalVisible = false;
  }
  listCard() {
    this.storyMappingService.getCards(1).subscribe(
      items => {
        this.cards = items;
      }
    );
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

  getContentInfo(content: string) {
    if (content.length > 20) {
      return content.substr(0, 19) + '...';
    }
    return content;
  }
  addRelease() {
    this.cards.push([]);
  }
}
