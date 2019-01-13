import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMappingEditComponent } from './story-mapping-edit.component';

describe('StoryMappingEditComponent', () => {
  let component: StoryMappingEditComponent;
  let fixture: ComponentFixture<StoryMappingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryMappingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMappingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
