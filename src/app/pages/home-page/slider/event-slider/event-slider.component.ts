import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EventFile } from './models/event-file.model';

@Component({
  selector: 'app-event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.css']
})
export class EventSliderComponent implements OnInit, OnChanges {

  currEventIndex!: number;

  @Input()
  eventArray!: EventFile[];

  @Input()
  groupName!: string;

  constructor() { }

  ngOnInit(): void {
    this.currEventIndex = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resetCurrEventIndex();
  }

  resetCurrEventIndex() {
    this.currEventIndex = 0;
  }
  
  eventSelector(direction: "Left" | "Right"): void {

      const arrayLength = this.eventArray.length

      if(direction === "Left"){
        
        this.currEventIndex = (this.currEventIndex - 1) !== -1 ? this.currEventIndex - 1 : arrayLength - 1;
      }
      else {
        this.currEventIndex = (this.currEventIndex + 1) !== arrayLength ? this.currEventIndex + 1 : 0;
      }

  }
}
