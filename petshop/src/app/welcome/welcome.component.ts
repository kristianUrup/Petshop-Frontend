import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  title = 'Welcome to this awesome, i will sure that you enjoy it haha'
  constructor() { }

  ngOnInit() {
  }

}
