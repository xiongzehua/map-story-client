import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {Project} from '../../model/entities';

@Component({
  selector: 'app-map-list',
  templateUrl: './story-mapping-list.component.html',
  styleUrls: ['./story-mapping-list.component.less']
})
export class StoryMappingListComponent implements OnInit {
  addProjectModelVisible = false;
  newProject: Project = {
    projectTitle: '',
    cards: [[]],
  };
  constructor(
    public projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.projectService.listProject();
  }

  showAddProjectModel() {
    this.newProject = {
      projectTitle: '',
      cards: [[]],
    };
    this.addProjectModelVisible = true;
  }
  addProjcetOk() {
    this.projectService.addProject(this.newProject);
    console.log(this.projectService);
    console.log(this.projectService.listProject());
    this.addProjectModelVisible = false;
  }

  addProjcetCancel() {
    this.addProjectModelVisible = false;
  }

}
