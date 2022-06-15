import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GroupFile } from './models/group-file.model';

@Component({
  selector: 'app-group-slider',
  templateUrl: './group-slider.component.html',
  styleUrls: ['./group-slider.component.css']
})
export class GroupSliderComponent implements OnInit {

  currGroupIndex!: number;

  @Input()
  groupsArray!: GroupFile[];

  constructor() { }

  ngOnInit(): void {
    this.currGroupIndex = 0;
  }

  groupSelector(direction: "Up" | "Down"): void {

      const arrayLength = this.groupsArray.length

      if(direction === "Up") {
        this.currGroupIndex = (this.currGroupIndex - 1) !== -1 ? this.currGroupIndex - 1 : arrayLength - 1;
      }
      else {
        this.currGroupIndex = (this.currGroupIndex + 1) !== arrayLength ? this.currGroupIndex + 1 : 0;
      }

  }

}
