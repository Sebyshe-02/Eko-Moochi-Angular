import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [NavbarComponent, CardsComponent, HeroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CardsComponent,
    HeroComponent
  ]

})
export class ComponentModule { }
