import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchPipe } from './custom-pipes/search.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DynamicComponent,
    NavbarComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    DynamicComponent,
    NavbarComponent,
    SearchPipe
  ]
})
export class SharedModule { }
