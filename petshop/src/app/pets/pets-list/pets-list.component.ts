import { Component, OnInit } from '@angular/core';
import {Pet} from "../../shared/models/pet";
import {PetService} from "../../shared/services/pet.service";

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getPets().subscribe(listOfPets=>{
      this.pets=listOfPets
    });
  }

  delete(id: number){
    this.petService.deletePet(id);
    // this.pets = this.petService.getPets();
  }
}
