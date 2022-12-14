import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DeliveredOrdersComponent } from './components/delivered-orders/delivered-orders.component';
import { DispatchedOrdersComponent } from './components/dispatched-orders/dispatched-orders.component';
import { EditComponent } from './components/edit/edit.component';
import { NewParcelOrderComponent } from './components/new-parcel-order/new-parcel-order.component';
import { ViewParcelComponent } from './components/view-parcel/view-parcel.component';


const routes: Routes = [

  {path:'',component:AdminDashboardComponent,children:[
    {path:'all-orders',component:AllOrdersComponent},
    {path:'delivered-orders',component:DeliveredOrdersComponent},
    {path:'dispatched-orders',component:DispatchedOrdersComponent},
    {path:'new-parcel-order',component:NewParcelOrderComponent},
    {path:'clients',component:ClientsComponent},
    {path:'edit/:id',component:EditComponent},
    {path:'view-parcel/:id',component:ViewParcelComponent}
  
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
