import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() activeNav:any;
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.activeNav);
  }
}
