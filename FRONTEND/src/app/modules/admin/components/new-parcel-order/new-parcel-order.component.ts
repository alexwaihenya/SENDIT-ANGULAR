import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IParcel } from 'src/app/intefaces';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';
import { ParcelState } from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions'


@Component({
  selector: 'app-new-parcel-order',
  templateUrl: './new-parcel-order.component.html',
  styleUrls: ['./new-parcel-order.component.css']
})
export class NewParcelOrderComponent implements OnInit {
  parcelform!: FormGroup
  parcel!: IParcel[]

  constructor(private fb: FormBuilder, private parcelService: ApiUserService, private store: Store<ParcelState>, private router: Router) { }

  ngOnInit(): void {

    this.parcelform = this.fb.group({
      senderemail: ['', [Validators.required]],
      receiveremail: ['', [Validators.required]],
      parcel_desc: ['', [Validators.required]],
      fromLoc: ['', [Validators.required]],
      toLoc: ['', [Validators.required]],
      // receiveremail: ['select', [Validators.required]],
      // dispatch_date: ['', [Validators.required]],
      // delivery_date: ['', [Validators.required]],
      status: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })

    this.parcelform.get('weight')?.valueChanges.subscribe(res => {
      this.parcelform.get('price')!.setValue(res * 50)
    })
  }

  addParcel() {

    console.log(this.parcelform.value);

    const newParcel: IParcel = { ...this.parcelform.value }
    console.log(newParcel);

    this.store.dispatch(Actions.AddParcel({ newParcel: this.parcelform.value }))
    this.store.dispatch(Actions.LoadParcels())
    this.router.navigate(['/admin/all-orders'])


  }

}
