import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username = '';
  password = ''; 
  constructor() { }

  ngOnInit(): void {
  }

  print(): void {
    console.log(this.username + " " + this.password);

  }

}
