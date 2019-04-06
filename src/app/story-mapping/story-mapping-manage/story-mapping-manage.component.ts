import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-map-manage',
  templateUrl: './story-mapping-manage.component.html',
  styleUrls: ['./story-mapping-manage.component.less']
})
export class StoryMappingManageComponent implements OnInit {
  addEmail = '';

  constructor(
    private location: PlatformLocation,
    private projectService: ProjectService
  ) { }

  ngOnInit() {

  }

}
