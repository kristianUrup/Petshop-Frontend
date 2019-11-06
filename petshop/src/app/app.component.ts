import { Component } from '@angular/core';
import {Pet} from "./shared/models/pet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 1;


  countUpOne(){
  }
}
