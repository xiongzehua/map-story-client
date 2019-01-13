import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-list',
  templateUrl: './story-mapping-list.component.html',
  styleUrls: ['./story-mapping-list.component.less']
})
export class StoryMappingListComponent implements OnInit {

  data = [
    {
      id: 1,
      title: 'map 1'
    },
    {
      id: 2,
      title: 'map 2'
    },
    {
      id: 3,
      title: 'map 3'
    },
    {
      id: 4,
      title: 'map 4'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
