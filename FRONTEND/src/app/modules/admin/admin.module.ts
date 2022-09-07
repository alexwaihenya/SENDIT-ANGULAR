import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DeliveredOrdersComponent } from './components/delivered-orders/delivered-orders.component';
import { DispatchedOrdersComponent } from './components/dispatched-orders/dispatched-orders.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { NewParcelOrderComponent } from './components/new-parcel-order/new-parcel-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './components/clients/clients.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    DeliveredOrdersComponent,
    DispatchedOrdersComponent,
    AllOrdersComponent,
    NewParcelOrderComponent,
    ClientsComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
