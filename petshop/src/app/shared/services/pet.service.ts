import { Injectable } from '@angular/core';
import {Pet} from "../models/pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  id: number = 1;
  pets: Pet[];
  constructor() {
    this.pets = [
      {id:this.id++, name: "John", type:"Dog", price: 200},
      {id:this.id++, name: "Jones", type:"Dog", price: 250},
      {id:this.id++, name: "Mikael", type:"Cat", price: 100}
    ];
  }

  addPet(pet: Pet)
  {
    pet.id = this.id++;
    this.pets.push(pet);
  }

  getPets(): Pet[]{
    return this.pets;
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
