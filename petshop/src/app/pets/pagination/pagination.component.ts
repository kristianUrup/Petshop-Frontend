import { Component, OnInit } from '@angular/core';
import {PetsListComponent} from "../pets-list/pets-list.component";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(private petList: PetsListComponent) { }

  ngOnInit() {

  }

  setCurrentPage(currentPage: number){
    this.petList.currentPage = currentPage
  }
}
