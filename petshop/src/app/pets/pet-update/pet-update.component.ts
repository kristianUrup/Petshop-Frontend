import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PetService} from "../../shared/services/pet.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.scss']
})
export class PetUpdateComponent implements OnInit {
  id: number;
  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl('')
  })

  constructor(private route: ActivatedRoute,
              private petService: PetService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPetById(this.id)
      .subscribe(petFromRest=>{
        this.petForm.patchValue({
          name: petFromRest.name,
          type: petFromRest.type,
          price: petFromRest.price
        });
      });
  }

  save(){
    const pet = this.petForm.value;
    pet.id = this.id;
    this.petService.updatePet(pet).subscribe(()=>{
      this.router.navigateByUrl('/pets');
    });
    this.petForm.reset();
  }
}
