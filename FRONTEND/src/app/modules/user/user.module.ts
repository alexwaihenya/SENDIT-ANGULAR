import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { IncomingParcelsComponent } from './components/incoming-parcels/incoming-parcels.component';
import { OutgoingParcelsComponent } from './components/outgoing-parcels/outgoing-parcels.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffectsService } from 'src/app/Redux/Effects/OrdersEffects';
import { ParcelReducer } from 'src/app/Redux/Reducers/OrdersReducers';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserDashboardComponent,
    IncomingParcelsComponent,
    OutgoingParcelsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule,
    FormsModule,
    StoreModule.forFeature('parcel',ParcelReducer),
    EffectsModule.forFeature([OrderEffectsService])
  ]
})
export class UserModule { }
