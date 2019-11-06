import { Component, OnInit } from '@angular/core';
import {Pet} from "../../shared/models/pet";
import {PetService} from "../../shared/services/pet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  pet: Pet;
  constructor(private petService: PetService,
  private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pet = this.petService.getPetById(id);
  }

}
