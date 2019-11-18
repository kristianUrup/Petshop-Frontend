import { Component, OnInit } from '@angular/core';
import {filter} from "rxjs/operators";
import {Filter} from "../shared/filtering/filter";

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {

  filter: Filter;
  items: number[] =[1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
