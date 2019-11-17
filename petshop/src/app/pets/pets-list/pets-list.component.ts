import { Component, OnInit } from '@angular/core';
import {Pet} from "../../shared/models/pet";
import {PetService} from "../../shared/services/pet.service";
import {FilteredListPets} from "../../shared/filtering/filteredListPets";
import {AuthenticationService} from "../../shared/services/authentication/authentication.service";

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  pets: FilteredListPets;
  username: string;
  errormessage: string = '';

  constructor(private petService: PetService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit() {
    this.refresh();
  }

  refresh (){

    this.petService.getPets().subscribe(
      listOfPets=>{
      this.pets = listOfPets
      },
        error => {
        this.errormessage = error.message;
      });
  }

  delete(id: number){
    this.petService.deletePet(id)
      .subscribe(message=> {
      console.log('Deleted user, got message: '+ message);
      this.refresh();
    });
    // this.pets = this.petService.getPets();
  }
}
