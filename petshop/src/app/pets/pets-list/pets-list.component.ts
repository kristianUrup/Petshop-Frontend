import {Component, OnInit, ViewChild} from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {FilteredListPets} from '../../shared/filtering/filteredListPets';
import {AuthenticationService} from '../../shared/services/authentication/authentication.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})

export class PetsListComponent implements OnInit {

  items: number[] = [5, 10, 20];
  currentPage: number;
  pets: FilteredListPets;
  username: string;
  errormessage = '';
  itemsPrPage = 5;

  constructor(private petService: PetService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit() {
    this.currentPage = 0;
    this.refresh();
  }

  refresh() {
    this.petService.getPets(this.itemsPrPage, this.currentPage + 1).subscribe(
      listOfPets => {
       this.pets = listOfPets;
      },
        error => {
        this.errormessage = error.message;
      });
  }

  delete(id: number) {
    this.petService.deletePet(id)
      .subscribe(message => {
      console.log('Deleted user, got message: ' + message);
      this.refresh();
    });
  }

  test(info) {
    debugger;
    this.currentPage = info.pageIndex;
    this.refresh();
  }
}
