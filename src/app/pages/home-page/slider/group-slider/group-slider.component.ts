import { Component, Input, OnInit } from '@angular/core';
import { GroupFile } from './models/group-file.model';

@Component({
  selector: 'app-group-slider',
  templateUrl: './group-slider.component.html',
  styleUrls: ['./group-slider.component.css']
})
export class GroupSliderComponent implements OnInit {

  groupPlaceSelector!: number;

  @Input()
  group!: GroupFile[];

  constructor() { }

  ngOnInit(): void {
    this.groupPlaceSelector = 0;
  }

}
