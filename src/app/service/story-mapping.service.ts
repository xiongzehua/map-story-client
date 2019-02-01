import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Card, StoryMapping} from '../model/entities';
import {cards, storyMappings} from '../mock/mocks';

@Injectable({
  providedIn: 'root'
})
export class StoryMappingService {
  
  currentStoryMapping(storyMappingId: number): Observable<StoryMapping> {
    for (let map of storyMappings) {
      if (map.id == storyMappingId) {
        return of(map);
      }
    }
  }

  listStoryMapping(): Observable<StoryMapping[]> {
    return of(storyMappings);
  }
  getCards(storyMappingId: number): Observable<Card[][]> {
    return of(cards);
  }
  constructor() { }
}
