import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomingParcelsComponent } from './components/incoming-parcels/incoming-parcels.component';
import { OutgoingParcelsComponent } from './components/outgoing-parcels/outgoing-parcels.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'user-dashboard',component:UserDashboardComponent,children:[
    {path:'incoming',component:IncomingParcelsComponent},
    {path:'outgoing',component:OutgoingParcelsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
