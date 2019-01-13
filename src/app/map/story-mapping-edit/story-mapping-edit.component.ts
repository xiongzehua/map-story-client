import { Component, OnInit } from '@angular/core';
import * as Konva from 'konva';
import {Card} from '../../model/entities';

@Component({
  selector: 'app-map-edit',
  templateUrl: './story-mapping-edit.component.html',
  styleUrls: ['./story-mapping-edit.component.less']
})
export class StoryMappingEditComponent implements OnInit {
  cards: Card[] = [{content: '11111'}, {content: '2222'}, {content: '33333'},
    {content: '444444'}, {content: '555555'}, {content: '666666'}, {content: '777777'}];
  add() {
    this.cards.push({content: 'asdasdqweqweqasdasdqweq啊实打实的阿德飒飒大苏打啊是的撒大苏打阿萨大阿萨大'});
  }
  constructor() { }

  ngOnInit() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height
    });

    const layer = new Konva.Layer();
    const rectX = stage.getWidth() / 2 - 50;
    const rectY = stage.getHeight() / 2 - 25;

    const box = new Konva.Rect({
      x: rectX,
      y: rectY,
      width: 100,
      height: 50,
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    });

    // add cursor styling
    box.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
    });
    box.on('mouseout', function() {
      document.body.style.cursor = 'default';
    });

    layer.add(box);
    stage.add(layer);
  }

}
