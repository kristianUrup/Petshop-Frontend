import { Component, OnInit } from '@angular/core';
import {PetsListComponent} from "../pets-list/pets-list.component";
import {NumberSelector} from "../../shared/filtering/number-selector";

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {

  items: number[] = [2,5,10];
  constructor(private petsList: PetsListComponent) { }

  ngOnInit() {
  }

  changeFilter(itemsPrPage: number){
    this.petsList.refresh();
  }

}
