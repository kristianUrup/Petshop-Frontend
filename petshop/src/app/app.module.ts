import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./guards/auth.guard";
import {AuthenticationService} from "./shared/services/authentication/authentication.service";
import {PetService} from "./shared/services/pet.service";

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    NavBarComponent,
    WelcomeComponent,
    PetDetailsComponent,
    PetAddComponent,
    PetUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
