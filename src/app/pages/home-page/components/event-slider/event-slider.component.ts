import { Component, OnInit } from '@angular/core';
import { Group } from "../../../../interfaces/group";
import {GroupEvent} from "../../../../interfaces/groupEvents";
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.css']
})
export class EventSliderComponent implements OnInit {
  selectedGroup: Group;
  selectedEvent?: GroupEvent;
  currGroupIndex: number;

  currEventIndex: number;
  groups!: Group[];

  eventTextIsHidden: boolean = true;

  constructor( private router: Router, private service: GroupService ) {

    this.groups = this.service.getGroupList();
    this.currGroupIndex = 0;
    this.currEventIndex = 0;
    this.selectedGroup = this.groups[this.currGroupIndex];
    if(!this.selectedGroup.groupEvents) {
      console.log("Selected group has no added events, event-slider.components.ts : 32");
    } else {
      this.selectedEvent = this.selectedGroup.groupEvents[this.currEventIndex];
    }
  }

  ngOnInit(): void {
  }

  eventSelector(direction: "Left" | "Right"): void {

    const arrayLength = this.groups.length

    if(direction === "Left"){
      
      this.currEventIndex = (this.currEventIndex - 1) !== -1 ? this.currEventIndex - 1 : arrayLength - 1;
    }
    else {
      this.currEventIndex = (this.currEventIndex + 1) !== arrayLength ? this.currEventIndex + 1 : 0;
    }

  }

  goToLink(url: string):void {

    this.router.navigateByUrl('/' + url);
  }

  closeEventText():void {

    console.log("close");
    this.eventTextIsHidden = true;
  }

  showEventText():void {

    console.log("open");
    this.eventTextIsHidden = false;
  }

  groupSelector(direction: "Up" | "Down"): void {

      const arrayLength = this.groups.length

      if(direction === "Up") {
        this.currGroupIndex = (this.currGroupIndex - 1) !== -1 ? this.currGroupIndex - 1 : arrayLength - 1;
      }
      else {
        this.currGroupIndex = (this.currGroupIndex + 1) !== arrayLength ? this.currGroupIndex + 1 : 0;
      }

  }

  setGroup(name: string): void{

    let successful = false;

    for( let item of this.groups) {

      if( item.name === name){
        this.currGroupIndex = this.groups.indexOf(item);
        successful = true;
      }
    }

    if (successful !== true) alert('No group with that name found');
  }


}
