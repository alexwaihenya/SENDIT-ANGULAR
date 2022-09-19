import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IParcel } from 'src/app/intefaces';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';
import {
  getOrder,
  getOrders,
  OrderState,
} from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions';
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent implements OnInit {
  // orders:any;
  filter: string = '';
  p: number = 1;

  parcel_id!: number;

  constructor(
    private route: ActivatedRoute,
    private parcelService: ApiUserService,
    private store: Store<OrderState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.parcel_id = +param['id'];
    });
    this.store.dispatch(Actions.SelectedId({ id: this.parcel_id }));
    this.getAll();
    // this.deleteParcel(this.parcel_id)

    this.store.dispatch(Actions.LoadParcels());
  }
  orders$ = this.store.select(getOrders);

  getAll() {
    this.store.dispatch(Actions.LoadParcels());
  }
  deleteParcel(parcel_id: number) {
    this.store.dispatch(Actions.DeleteParcel({ parcel_id: parcel_id }));
    console.log(parcel_id);
    // this.store.dispatch(Actions.LoadParcels())
    // this.store.dispatch(Actions.LoadParcels())
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
