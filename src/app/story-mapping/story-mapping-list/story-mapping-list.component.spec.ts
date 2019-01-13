import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMappingListComponent } from './story-mapping-list.component';

describe('StoryMappingListComponent', () => {
  let component: StoryMappingListComponent;
  let fixture: ComponentFixture<StoryMappingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryMappingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMappingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
