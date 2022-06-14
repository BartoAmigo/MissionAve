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
  groupsArray!: GroupFile[];

  constructor() { }

  ngOnInit(): void {
    this.groupPlaceSelector = 0;
  }

  // nextGroup() {
  //     if(this.currentGroup != this.groups.length-1) {
  //     this.currentGroup++;
  //     this.selectedGroup = this.groups[this.currentGroup];
  //   }
  // } 

  // prevGroup() {
  //   if(this.currentGroup != 0) {
  //   this.currentGroup--;
  //   this.selectedGroup = this.groups[this.currentGroup];
  //   }
  // }
  setPlaceSelector(place: number): void {

    this.groupPlaceSelector = place
  }

  movePlaceSelector(direction: "Left" | "Right"): void {

      const arrayLength = this.groupsArray.length

      if(direction === "Left"){
        
        this.groupPlaceSelector = (this.groupPlaceSelector - 1) !== -1 ? this.groupPlaceSelector - 1 : arrayLength - 1;
      }
      else {
        this.groupPlaceSelector = (this.groupPlaceSelector + 1) !== arrayLength ? this.groupPlaceSelector + 1 : 0;
      }

  }

}
