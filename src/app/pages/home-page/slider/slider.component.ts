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
      imageUrl: "assets/Punk Event.jpg",
      buttonLink: "string"
    },
    {
      eventName: "party",
      imageUrl: "assets/Punk Event.jpg",
      buttonLink: "string"
    },
    {
      eventName: "party",
      imageUrl: "assets/Punk Event.jpg",
      buttonLink: "string"
    }]

    },
    {

      groupName: "Goth",

      events: [{
        eventName: "party",
        imageUrl: "assets/Goth Event.jpg",
        buttonLink: "string"
      },
      {
        eventName: "party",
        imageUrl: "assets/Goth Event.jpg",
        buttonLink: "string"
      },
      {
        eventName: "party",
        imageUrl: "assets/Goth Event.jpg",
        buttonLink: "string"
      }]

    }
  ]

}
