import { Component, OnInit } from '@angular/core';
import { GroupFile } from './group-slider/models/group-file.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputGroup: GroupFile[] = [
    {

    groupName: "Punks",
    events: [{
      eventName: "party",
      imageUrl: "string",
      buttonLink: "string"
    },
    {
      eventName: "party",
      imageUrl: "string",
      buttonLink: "string"
    },
    {
      eventName: "party",
      imageUrl: "string",
      buttonLink: "string"
    }]

    },
    {

      groupName: "Goth",

      events: [{
        eventName: "party",
        imageUrl: "string",
        buttonLink: "string"
      },
      {
        eventName: "party",
        imageUrl: "string",
        buttonLink: "string"
      },
      {
        eventName: "party",
        imageUrl: "string",
        buttonLink: "string"
      }]

    }
  ]

}
