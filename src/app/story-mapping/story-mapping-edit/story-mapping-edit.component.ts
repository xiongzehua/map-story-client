import {Component, Input, OnInit} from '@angular/core';
import {Card, Project} from '../../model/entities';
import {ProjectService} from '../../service/project.service';
import {NzModalService} from 'ng-zorro-antd';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-map-edit',
  templateUrl: './story-mapping-edit.component.html',
  styleUrls: ['./story-mapping-edit.component.less']
})
export class StoryMappingEditComponent implements OnInit {

  addCardModalVisible = false;
  editCardModalVisible = false;
  currentCard = {
    i: -1,
    j: -1,
    content: '',
  };
  // cards: Card[][];
  constructor(
    public projectService: ProjectService,
    public location: PlatformLocation,
  ) {
   }

  ngOnInit() {
    this.projectService.getProject();
  }

  showEditCardModal(i: number, j: number): void {
    this.currentCard.i = i;
    this.currentCard.j = j;
    this.currentCard.content = this.projectService.currentProject.cards[i][j].content;
    this.editCardModalVisible = true;
  }
  showAddCardModal(i: number): void {
    this.currentCard.i = i;
    this.currentCard.j = this.projectService.currentProject.cards[i].length;
    this.currentCard.content = '';
    this.addCardModalVisible = true;
  }
  addCardOk(): void {
    console.log('Button ok clicked!');
    const newCard = {
      content: this.currentCard.content,
    };
    this.projectService.currentProject.cards[this.currentCard.i].push(newCard);
    this.addCardModalVisible = false;
    this.projectService.updateProject();
  }

  addCardCancel(): void {
    console.log('Button cancel clicked!');
    this.addCardModalVisible = false;
  }

  editCardOk(): void {
    console.log('Button ok clicked!');
    this.projectService.currentProject.cards[this.currentCard.i][this.currentCard.j].content = this.currentCard.content;
    this.editCardModalVisible = false;
    this.projectService.updateProject();
  }

  editCardDelete(): void {
    console.log('Button ok clicked!');
    this.projectService.currentProject.cards[this.currentCard.i].splice(this.currentCard.j, 1);
    this.editCardModalVisible = false;
  }

  editCardCancel(): void {
    console.log('Button cancel clicked!');
    this.editCardModalVisible = false;
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
    this.projectService.currentProject.cards.push([]);
  }
}
