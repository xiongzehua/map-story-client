import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { StoryMappingService } from 'src/app/service/story-mapping.service';

@Component({
  selector: 'app-map-manage',
  templateUrl: './story-mapping-manage.component.html',
  styleUrls: ['./story-mapping-manage.component.less']
})
export class StoryMappingManageComponent implements OnInit {

  currentStoryMapping = null;

  constructor(
    private location: PlatformLocation,
    private storyMappingService: StoryMappingService
  ) { }

  ngOnInit() {
    this.setCurrentStoryMapping(+this.location.pathname.split("/").pop());
  }

  setCurrentStoryMapping(id: number): void {
    this.storyMappingService.currentStoryMapping(id).subscribe(
      mapping => {
        console.log(mapping);
        this.currentStoryMapping = mapping;
      }
    );
  }

}
