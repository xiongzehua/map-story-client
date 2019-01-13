import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {StoryMapping} from '../model/entities';
import {storyMappings} from '../mock/mocks';

@Injectable({
  providedIn: 'root'
})
export class StoryMappingService {
  currentMap = {
    id: 1,
    text: 'map 1'
  };
  listStoryMapping(): Observable<StoryMapping[]> {
    return of(storyMappings);
  }
  constructor() { }
}
