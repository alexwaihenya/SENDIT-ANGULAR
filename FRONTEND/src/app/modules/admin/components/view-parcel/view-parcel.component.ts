import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IParcel } from 'src/app/intefaces';
import { getParcel, getParcels, ParcelState } from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions';


@Component({
  selector: 'app-view-parcel',
  templateUrl: './view-parcel.component.html',
  styleUrls: ['./view-parcel.component.css']
})
export class ViewParcelComponent implements OnInit {

  parcels!: IParcel[]
  form!: FormGroup


  parcel_id!: number

  constructor(
    private store: Store<ParcelState>,
    private route: ActivatedRoute,
    private router: Router,
    private fb:FormBuilder
  ) { }


  

  // parcels$ = this.store.dispatch(Actions.LoadParcels())


  ngOnInit(): void {

    this.form = this.fb.group({
      status:[null, [Validators.required]]
    })



    this.store.dispatch(Actions.LoadParcels());
    this.route.params.subscribe((params) => {
      // console.log(params);

      this.parcel_id = params['id'];
      this.store.dispatch(Actions.SelectedId({ id: +this.parcel_id }));
      console.log(this.parcel_id);

    });

    this.store.select(getParcels).subscribe((parcel) => {
      
      this.parcels = parcel.filter(el => el.parcel_id == this.parcel_id)
        console.log(this.parcels);
        const coordinateA=this.parcels.map((el)=>({
          lat:el.fromLat,
          lng:el.fromLong
        }))
        const coordinateB=this.parcels.map((el)=>({
          lat:el.toLat,
          lng:el.toLong
        }))
        this.markerPositions = coordinateA.concat(coordinateB)
      }
      )

    }


    updateParcelStatus(){
      this.store.dispatch(Actions.UpdateParcelStatus({parcel_id:this.parcel_id, updateParcelStatus:{...this.form.value}}))
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
  markerPositions: google.maps.LatLngLiteral[] = [];




}
