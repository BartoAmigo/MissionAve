import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.css']
})
export class EventSliderComponent implements OnInit {
  groups : Group[] = [];
  events: any;
  currEventIndex: number; 
  currEvent: any;
  currGroup: Group;


  constructor(private groupService: GroupService) {
    this.getGroups();
    this.currEventIndex = 0;
    this.currGroup = this.groups[0];
  }

  ngOnInit(): void {
    if(this.checkEvents()) {
      this.setEvents();
    }
    if(this.checkEvent()) {
      this.setEvent();
    }
  }

  selectGroup(group:Group) {
    this.currGroup = group
    if(this.checkEvents()) {
      this.setEvents();
    } else {
      this.events = null;
    }
    if(this.checkEvent()) {
      this.setEvent();
    } else {
      this.currEvent = null;
    }
  }
  
  nextEvent() {
    this.currEventIndex++;
    if(this.checkEvent()) {
      this.setEvent();
    } else {
      this.currEventIndex = 0;
      this.setEvent();
    }
  }

  prevEvent() {
    this.currEventIndex--;
    if(this.checkEvent()) {
      this.setEvent();
    } else {
      this.currEventIndex = this.events.length - 1;
      this.setEvent();
    }
  }

  checkEvents(): boolean {
    return this.currGroup.groupEvents ? true : false;
  }
  
  checkEvent(): boolean {
   return this.events[this.currEventIndex] ? true : false;
  }

  setEvents() {
    this.events = this.currGroup.groupEvents;
  }
  
  setEvent() {
    this.currEvent = this.events[this.currEventIndex];
  }

  getGroups() : void {
    this.groupService.getGroups()
        .subscribe(groups => this.groups = groups);
  }

}
