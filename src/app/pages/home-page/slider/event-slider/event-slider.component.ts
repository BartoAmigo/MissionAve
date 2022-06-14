import { Component, Input, OnInit } from '@angular/core';
import { EventFile } from './models/event-file.model';

@Component({
  selector: 'app-event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.css']
})
export class EventSliderComponent implements OnInit {

  eventPlaceSelector!: number;

  @Input()
  eventArray!: EventFile[];

  @Input()
  groupName!: string;

  constructor() { }

  ngOnInit(): void {
    this.eventPlaceSelector = 0;
  }

  setPlaceSelector(place: number): void {

    this.eventPlaceSelector = place
  }

  movePlaceSelector(direction: "Left" | "Right"): void {

      const arrayLength = this.eventArray.length

      if(direction === "Left"){
        
        this.eventPlaceSelector = (this.eventPlaceSelector - 1) !== -1 ? this.eventPlaceSelector - 1 : arrayLength - 1;
      }
      else {
        this.eventPlaceSelector = (this.eventPlaceSelector + 1) !== arrayLength ? this.eventPlaceSelector + 1 : 0;
      }

  }
}
