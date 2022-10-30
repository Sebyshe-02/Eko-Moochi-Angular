import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { HeroComponent } from './hero/hero.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [NavbarComponent, CardsComponent, HeroComponent, IniciarSesionComponent, RegistroComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    CardsComponent,
    HeroComponent,
    IniciarSesionComponent,
    RegistroComponent,
  ]

})
export class ComponentModule { }
