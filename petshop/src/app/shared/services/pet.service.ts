import { Injectable } from '@angular/core';
import {Pet} from "../models/pet";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  id: number = 1;
  pets: Pet[];
  constructor(private http: HttpClient) {
  }

  addPet(pet: Pet)
  {
    pet.id = this.id++;
    this.pets.push(pet);
  }

  getPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>
    ('https://petshopapplication.azurewebsites.net/api/pets');
  }

  updatePet(pet:Pet){
    const petToUpdate = this.pets.find(p=>p.id === pet.id);
    const index = this.pets.indexOf(petToUpdate);
    this.pets[index] = pet;
  }

  getPetById(id: number): Pet{
    return this.pets.find(pet=>pet.id === id);
  }

  deletePet(id: number){
    this.pets = this.pets.filter(pet=>pet.id !== id);
  }




}
