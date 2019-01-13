import { Component, OnInit } from '@angular/core';
import {StoryMappingService} from '../../service/story-mapping.service';
import {StoryMapping} from '../../model/entities';

@Component({
  selector: 'app-map-list',
  templateUrl: './story-mapping-list.component.html',
  styleUrls: ['./story-mapping-list.component.less']
})
export class StoryMappingListComponent implements OnInit {
  storyMappings: StoryMapping[];
  constructor(
    private storyMappingService: StoryMappingService,
  ) { }

  ngOnInit() {
    this.listStoryMapping();
  }
  listStoryMapping() {
    return this.storyMappingService.listStoryMapping().subscribe(
      items => {
        this.storyMappings = items;
      }
    );
  }

}
