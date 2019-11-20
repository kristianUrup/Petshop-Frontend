import { Component, OnInit } from '@angular/core';
import {filter} from "rxjs/operators";
import {Filter} from "../shared/filtering/filter";
import {PetsListComponent} from "../pets/pets-list/pets-list.component";
import {NumberSelector} from "../shared/filtering/number-selector";

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {

  items: NumberSelector[] = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
  ]
  option: number;
  constructor(private petsList: PetsListComponent) { }

  ngOnInit() {
  }

  changeFilter(itemsPrPage: number){
    this.petsList.setFilter(itemsPrPage);
  }

  setOption(item: number){
    this.option = item;
  }
}
