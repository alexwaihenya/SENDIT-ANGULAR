import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { GoogleMapsModule } from '@angular/google-maps'



@NgModule({
  declarations: [
    NavbarComponent,
    GoogleMapsComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports:[
    NavbarComponent,
    GoogleMapsComponent
  ]
})
export class SharedModule { }
