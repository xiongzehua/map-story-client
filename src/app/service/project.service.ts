import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Card, Project} from '../model/entities';
import {cards, storyMappings} from '../mock/mocks';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public projects: Project[] = storyMappings;
  public cnt = 0;
  public currentProject: Project = this.projects[0];
  listProject(): Project[] {
    return this.projects;
  }
  addProject(newProject: Project) {
    newProject.id = this.projects[this.projects.length - 1].id + 1;
    this.projects.push(newProject);
  }
  getProject(productId: number) {

  }
  getCurrentProject(): Project {
    return this.currentProject;
  }
  updateProject(product: Project) {
    // request请求

    // 本地数据更新
  }
  setCurrentProject(productId: number) {
    for (const p of this.projects) {
      if (p.id === productId) {
        this.currentProject = p;
      }
    }
  }
  currentStoryMapping(storyMappingId: number): Observable<Project> {
    for (const map of storyMappings) {
      if (map.id === storyMappingId) {
        return of(map);
      }
    }
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
  constructor() { }
}
