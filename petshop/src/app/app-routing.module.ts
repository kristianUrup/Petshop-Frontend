import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {PetsListComponent} from "./pets/pets-list/pets-list.component";
import {PetDetailsComponent} from "./pets/pet-details/pet-details.component";
import {PetAddComponent} from "./pets/pet-add/pet-add.component";
import {PetUpdateComponent} from "./pets/pet-update/pet-update.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'pets/:id', component: PetDetailsComponent},
  { path: 'pet-update/:id', component: PetUpdateComponent},
  { path: 'pet-add', component: PetAddComponent},
  { path: 'pets', component: PetsListComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
