import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { EventFile } from './models/event-file.model';

@Component({
  selector: 'app-event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.css']
})
export class EventSliderComponent implements OnInit, OnChanges {

  currEventIndex!: number;

  currImage!: string;

  eventTextIsHidden: boolean = true;

  @Input()
  eventArray!: EventFile[];

  @Input()
  groupName!: string;

  constructor(

    private router: Router
  ) { }

  ngOnInit(): void {
    this.currEventIndex = 0;
    this.currImage = this.eventArray[this.currEventIndex].imageUrl;
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
}
