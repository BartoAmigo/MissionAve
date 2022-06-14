import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-slider',
  templateUrl: './group-slider.component.html',
  styleUrls: ['./group-slider.component.css']
})
export class GroupSliderComponent implements OnInit {
  groups : string[] = ["Horse People", "Dog People"]; 
  currentGroup = 0;
  selectedGroup = this.groups[this.currentGroup]; 
  constructor() { 
  }

  ngOnInit(): void {
  }

  nextGroup() {
      if(this.currentGroup != this.groups.length-1) {
      this.currentGroup++;
      this.selectedGroup = this.groups[this.currentGroup];
    }
  } 

  prevGroup() {
    if(this.currentGroup != 0) {
    this.currentGroup--;
    this.selectedGroup = this.groups[this.currentGroup];
  }
}

}
