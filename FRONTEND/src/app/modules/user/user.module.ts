import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { IncomingParcelsComponent } from './components/incoming-parcels/incoming-parcels.component';
import { OutgoingParcelsComponent } from './components/outgoing-parcels/outgoing-parcels.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    IncomingParcelsComponent,
    OutgoingParcelsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
