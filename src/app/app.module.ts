import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { PagesModule } from './pages/pages.module';
import { RegistroComponent } from './component/registro/registro.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'usuario', component: IniciarSesionComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    PagesModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
