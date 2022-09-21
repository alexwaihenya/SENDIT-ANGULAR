import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IParcel } from 'src/app/intefaces';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';
import {getParcel, getParcels, ParcelState } from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions';
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent implements OnInit {

  filter: string = '';
  p: number = 1;

  parcel_id!: number;


  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private parcelService: ApiUserService,
    private store: Store<ParcelState>
  ) {}



  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.parcel_id = +param['parcel_id'];
    });
    this.store.dispatch(Actions.SelectedId({ id: this.parcel_id }));
    this.getAll();
    

   

  }

  getAll(){

    this.store.dispatch(Actions.LoadParcels())

  }

  parcels$ = this.store.select(getParcels);

  deleteParcel(parcel_id: number) {
    this.store.dispatch(Actions.DeleteParcel({ parcel_id: parcel_id }));
    console.log(parcel_id);
    // this.store.dispatch(Actions.LoadParcels())
    // this.store.dispatch(Actions.LoadParcels())


  }
  
  updateParcel(parcel_id: number) {
    this.store.dispatch(Actions.SelectedId({ id: parcel_id }));

    this.router.navigate([`/admin/edit/${parcel_id}`])
  }



  display: any;
  center: google.maps.LatLngLiteral = {
    lat: -0.42013,
    lng: 36.94759,
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: -0.42013,
      lng: 36.94759,
    },
    {
      lat: 1.292066,
      lng: 36.821946,
    },
  ];

}
