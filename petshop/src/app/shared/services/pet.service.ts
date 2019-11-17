import { Injectable } from '@angular/core';
import {Pet} from "../models/pet";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilteredListPets} from "../filtering/filteredListPets";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  id: number = 1;
  apiUrl = 'https://petshopapplication.azurewebsites.net/api/pets';
  pets: FilteredListPets;
  constructor(private http: HttpClient) {
  }

  addPet(pet: Pet)
  {
    pet.id = this.id++;
    this.pets.list.push(pet);
  }

  getPets(): Observable<FilteredListPets>{
    return this.http.get<FilteredListPets>
    (this.apiUrl);
  }

  updatePet(pet:Pet){
    const petToUpdate = this.pets.list.find(p=>p.id === pet.id);
    const index = this.pets.list.indexOf(petToUpdate);
    this.pets[index] = pet;
  }

  getPetById(id: number): Observable<Pet>{
    return this.http.get<Pet>(this.apiUrl + '/'+ id);
  }

  deletePet(id: number): Observable<any>{
    return this.http.delete(this.apiUrl+ '/'+ id );
  }




}
