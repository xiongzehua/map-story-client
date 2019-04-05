import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Card, MyResponse, Project} from '../model/entities';
import {cards, storyMappings} from '../mock/mocks';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {PlatformLocation} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient, private userService: UserService, private location: PlatformLocation) { }
  public projects: Project[];
  public cnt = 0;
  public currentProjectId: string;
  public currentProject: Project = {
    projectId: '',
    projectTitle: '',
    projectContent: '',
    cards: [[]],
    ownerEmail: '',
    ownerId: '',
    ownerName: '',
    projectCards: '',
  };
  listProject() {
    const param = {
      userToken: this.userService.user.userToken,
    };
    const httpHeaders = {
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    }
    this.http
      .post('/api/project/list', param, options).subscribe(
      (items: MyResponse) => {
        console.log(this.projects);
        this.projects = items['data'];
      }
    );
  }
  addProject(newProject: Project) {
    const param = {
      userToken: this.userService.user.userToken,
      projectTitle: newProject.projectTitle,
      projectContent: ''
    };
    const httpHeaders = {
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    }
    this.http
      .post('/api/project/create', param, options).subscribe(
      (items: MyResponse) => {
        this.currentProject = items.data;
        this.currentProject.cards = items.data;
      }
    );
    this.listProject();
  }
  getProject() {
    this.currentProjectId = this.location.hash.split('/').pop();
    const param = {
      userToken: this.userService.user.userToken,
      projectId: this.currentProjectId
    };
    const httpHeaders = {
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    }
    this.http
      .post('/api/project/get', param, options).subscribe(
      (items: MyResponse) => {
        this.currentProject = items.data;
        if (this.currentProject.projectCards == null) {
          this.currentProject.cards = [[]];
        } else {
          this.currentProject.cards = JSON.parse(this.currentProject.projectCards);
        }
        console.log(this.currentProject);
      }
    );
  }
  updateProject() {
    const param = {
      userToken: this.userService.user.userToken,
      projectId: this.currentProjectId,
      projectTitle: this.currentProject.projectTitle,
      projectContent: this.currentProject.projectContent,
      cards: JSON.stringify(this.currentProject.cards)
    };
    const httpHeaders = {
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    }
    this.http
      .post('/api/project/update', param, options).subscribe(
      (items: MyResponse) => {
      }
    );
  }

  listStoryMapping(): Observable<Project[]> {
    return of(storyMappings);
  }
  addStoryMapping(newProject: Project) {
    storyMappings.push(newProject);
  }
  getCards(storyMappingId: number): Observable<Card[][]> {
    return of(cards);
  }
}
