import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IParcel } from 'src/app/intefaces';
import { getParcels, ParcelState, updateParcel } from 'src/app/Redux/Reducers/OrdersReducers';
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

  constructor(private fb:FormBuilder,private store: Store<ParcelState>, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

  
    this.store.dispatch(Actions.LoadParcels())
    this.route.params.subscribe(params=>{
      this.parcel_id=params['parcel_id']
    })

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
    this.updateparcelform.get('weight')?.valueChanges.subscribe(res => {
      this.updateparcelform.get('price')!.setValue(res * 50)
    })

    this.store.select(getParcels).subscribe((res)=>{
      let getOneParcel = res.filter(parcel=>parcel.parcel_id==this.parcel_id)
      if(getOneParcel){
        getOneParcel.find(parcel=>{
          parcel.parcel_id==this.parcel_id

          if(parcel){
            this.updateparcelform.patchValue({
    
              senderemail:parcel.senderemail,
              receiveremail:parcel.receiveremail,
              parcel_desc:parcel.parcel_desc,
              fromLoc:parcel.fromLoc,
              toLoc:parcel.toLoc,
              dispatch_date:parcel.dispatch_date,
              delivery_date:parcel.delivery_date,
              status:parcel.status,
              weight:parcel.weight,
              price:parcel.price
              
            })
          }

        })
      }
      
    })
    
      
    
    
  }

  updateParcel(){
    // const update:IParcel = {...this.updateparcelform.value,parcel_id:this.parcel_id}
    // console.log(update);

    this.store.dispatch(Actions.UpdateParcel({...this.updateparcelform.value,parcel_id:this.parcel_id}))
    this.store.dispatch(Actions.LoadParcels())
    this.router.navigate(['/admin/all-orders'])
    
  }

}
