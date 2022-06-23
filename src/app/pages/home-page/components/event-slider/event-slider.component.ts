import { Component, OnInit } from '@angular/core';
import { MOCKGROUPS } from "../../../../mock-data/mock-groups";
import { Group } from "../../../../interfaces/group";
import {GroupEvent} from "../../../../interfaces/event";

@Component({
  selector: 'app-event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.css']
})
export class EventSliderComponent implements OnInit {
  groups = MOCKGROUPS;
  selectedGroup: Group;
  selectedEvent?: GroupEvent;
  currGroupIndex: number;
  currEventIndex: number;

  constructor() {
    this.currGroupIndex = 0;
    this.currEventIndex = 0;
    this.selectedGroup = this.groups[this.currGroupIndex];
    if(!this.selectedGroup.groupEvents) {
      console.log("error");
    } else {
      this.selectedEvent = this.selectedGroup.groupEvents[this.currEventIndex];
    }
  }

  ngOnInit(): void {

  }

}
