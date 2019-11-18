import { Injectable } from '@angular/core';
import {Pet} from "../models/pet";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilteredListPets} from "../filtering/filteredListPets";
import {environment} from "../../../environments/environment.prod";
import {AuthenticationService} from "./authentication/authentication.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  id: number = 1;
  apiUrl = 'https://petshopapplication.azurewebsites.net/api/pets';
  pets: FilteredListPets;
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  addPet(pet: Pet)
  {
    pet.id = this.id++;
    this.pets.list.push(pet);
  }

  getPets(): Observable<FilteredListPets>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer '+ this.authenticationService.getToken());

    return this.http.get<FilteredListPets>
    (environment.apiUrl+ '/api/pets', httpOptions);
  }

  updatePet(pet:Pet): Observable<Pet>{
    return this.http.put<Pet>(this.apiUrl + '/'+ pet.id, pet);
  }

  getPetById(id: number): Observable<Pet>{
    return this.http.get<Pet>(this.apiUrl + '/'+ id);
  }

  deletePet(id: number): Observable<any>{
    return this.http.delete(this.apiUrl + '/'+ id );
  }




}
