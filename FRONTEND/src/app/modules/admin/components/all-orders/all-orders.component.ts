import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IParcel } from 'src/app/intefaces';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';
import { getOrder, getOrders, OrderState } from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions'
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD

=======
  // orders:any;
>>>>>>> master
=======

>>>>>>> 12ebafb145af38e63c15c48887952868a39f71e6
  filter: string = ''
  p: number = 1

  // parcel_id!: number
  id!: number




  constructor(private route: ActivatedRoute, private parcelService: ApiUserService, private store: Store<OrderState>) { }

  ngOnInit(): void {



    this.route.params.subscribe((param) => {
      this.id = param['id']
    })

    this.store.dispatch(Actions.SelectedId({ id: this.id }))
    this.getAll()
<<<<<<< HEAD
<<<<<<< HEAD
    // this.deleteParcel(this.id)
=======
    // this.deleteParcel(this.parcel_id)

    this.store.dispatch(Actions.LoadParcels())
>>>>>>> master
=======
    // this.deleteParcel(this.id)
>>>>>>> 12ebafb145af38e63c15c48887952868a39f71e6

  }
  orders$ = this.store.select(getOrders)

  getAll() {

<<<<<<< HEAD
<<<<<<< HEAD
    
=======


>>>>>>> master
=======
    
>>>>>>> 12ebafb145af38e63c15c48887952868a39f71e6
    this.store.dispatch(Actions.LoadParcels())


  }
<<<<<<< HEAD
  deleteParcel(parcel_id: number) {
    this.store.dispatch(Actions.DeleteParcel({ parcel_id: parcel_id }));
    console.log(parcel_id)
    // this.store.dispatch(Actions.LoadParcels())
    // this.store.dispatch(Actions.LoadParcels())
  }
=======
>>>>>>> 12ebafb145af38e63c15c48887952868a39f71e6

  deleteParcel(id:number,event:Event) {
    console.log(id);
    
    this.store.dispatch(Actions.DeleteParcel({id}))
    this.store.dispatch(Actions.LoadParcels())

  

    

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
