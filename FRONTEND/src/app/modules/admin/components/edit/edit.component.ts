import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IParcel } from 'src/app/intefaces';
import { getParcel, getParcelid, ParcelState } from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updateparcelform!: FormGroup
  parcel!: IParcel[]
  parcel_id!:number

  constructor(private fb:FormBuilder,private store: Store<ParcelState>, private router: Router) { }

  ngOnInit(): void {

    this.store.select(getParcelid).subscribe(res=>this.parcel_id=res)
    this.store.dispatch(Actions.LoadParcels())

    this.updateparcelform = this.fb.group({

      senderemail: ['', [Validators.required]],
      receiveremail: ['', [Validators.required]],
      parcel_desc: ['', [Validators.required]],
      fromLoc: ['', [Validators.required]],
      toLoc: ['', [Validators.required]],
      dispatch_date: ['', [Validators.required]],
      delivery_date: ['', [Validators.required]],
      status: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      price: ['', [Validators.required]]
      
    })

    this.store.select(getParcel).subscribe(parcel=>{
      // console.log(parcel);
      
      if(parcel){
        this.updateparcelform.patchValue({

          senderemail:parcel.senderemail,
          receiveremail:parcel.receiveremail,
          parcel_desc:parcel.parcel_desc,
          fromLoc:parcel.fromLoc,
          toLoc:parcel.toLoc,
          status:parcel.status,
          weight:parcel.weight,
          price:parcel.price
          
        })
      }
    })
  }

  updateParcel(){
    const update:IParcel = {...this.updateparcelform.value,parcel_id:this.parcel_id}
    console.log(update);

    this.store.dispatch(Actions.UpdateParcel({updateParcel:update}))
    this.store.dispatch(Actions.LoadParcels())
    this.router.navigate(['/admin/all-orders'])
    
  }

}
