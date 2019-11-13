import { Injectable } from '@angular/core';
import {Pet} from "../models/pet";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  id: number = 1;
  apiUrl = 'https://petshopapplication.azurewebsites.net/api/pets';
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
    (this.apiUrl);
  }

  updatePet(pet:Pet){
    const petToUpdate = this.pets.find(p=>p.id === pet.id);
    const index = this.pets.indexOf(petToUpdate);
    this.pets[index] = pet;
  }

  getPetById(id: number): Observable<Pet>{
    return this.http.get<Pet>(this.apiUrl + '/'+ id);
  }

  deletePet(id: number): Observable<any>{
    return this.http.delete(this.apiUrl+ '/'+ id );
  }




}
