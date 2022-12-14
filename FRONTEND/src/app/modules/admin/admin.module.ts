import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DeliveredOrdersComponent } from './components/delivered-orders/delivered-orders.component';
import { DispatchedOrdersComponent } from './components/dispatched-orders/dispatched-orders.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { NewParcelOrderComponent } from './components/new-parcel-order/new-parcel-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './components/clients/clients.component';
import { StoreModule } from '@ngrx/store';
import { ParcelReducer } from 'src/app/Redux/Reducers/OrdersReducers';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffectsService } from 'src/app/Redux/Effects/OrdersEffects';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditComponent } from './components/edit/edit.component';
import { ViewParcelComponent } from './components/view-parcel/view-parcel.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglePlaceModule} from 'ngx-google-places-autocomplete'
// import { SearchParcelPipe } from './pipes/search-parcel.pipe';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    DeliveredOrdersComponent,
    DispatchedOrdersComponent,
    AllOrdersComponent,
    NewParcelOrderComponent,
    ClientsComponent,
    EditComponent,
    ViewParcelComponent,
    // SearchParcelPipe,
  
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    GoogleMapsModule,
    GooglePlaceModule,
    StoreModule.forFeature('parcel',ParcelReducer),
    EffectsModule.forFeature([OrderEffectsService]),
   
  ]
})
export class AdminModule { }
