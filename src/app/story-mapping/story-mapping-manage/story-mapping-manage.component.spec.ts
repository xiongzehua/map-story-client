import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMappingManageComponent } from './story-mapping-manage.component';

describe('StoryMappingManageComponent', () => {
  let component: StoryMappingManageComponent;
  let fixture: ComponentFixture<StoryMappingManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryMappingManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMappingManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
