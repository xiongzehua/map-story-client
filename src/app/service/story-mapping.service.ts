import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Card, StoryMapping} from '../model/entities';
import {cards, storyMappings} from '../mock/mocks';

@Injectable({
  providedIn: 'root'
})
export class StoryMappingService {
  listStoryMapping(): Observable<StoryMapping[]> {
    return of(storyMappings);
  }
  getCards(storyMappingId: number): Observable<Card[][]> {
    return of(cards);
  }
  constructor() { }
}
