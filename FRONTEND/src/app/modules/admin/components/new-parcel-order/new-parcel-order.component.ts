import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IParcel } from 'src/app/intefaces';
import { IUser } from 'src/app/intefaces/user';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';
import { ParcelState } from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions'


@Component({
  selector: 'app-new-parcel-order',
  templateUrl: './new-parcel-order.component.html',
  styleUrls: ['./new-parcel-order.component.css']
})
export class NewParcelOrderComponent implements OnInit {

  senderLat!:number
  senderLong!:number
  senderAddress:string=''


  receiverLat!:number
  receiverLong!:number
  receiverAddress:string=''

  OnAddressChangeSender(address:any){
    this.senderAddress = address.formatted_address
    this.senderLat = address.geometry.location.lat();
    this.senderLong = address.geometry.location.lng();

  }
  OnAddressChangeReceiver(address:any){
    this.receiverAddress = address.formatted_address
    this.receiverLat = address.geometry.location.lat();
    this.receiverLong = address.geometry.location.lng();

  }

  filled = false
  missing=false
  emails! : IUser[]

   



  parcelform!: FormGroup
  parcel!: IParcel[]

  constructor(private fb: FormBuilder, private userService: ApiUserService, private store: Store<ParcelState>, private router: Router) { }

  ngOnInit(): void {

    this.parcelform = this.fb.group({
      senderemail: ['', [Validators.required]],
      receiveremail: ['', [Validators.required]],
      parcel_desc: ['', [Validators.required]],
      fromLoc: ['', [Validators.required]],
      fromLat:['',[Validators.required]],
      fromLong:['',[Validators.required]],
      toLoc: ['', [Validators.required]],
      toLat: ['', [Validators.required]],
      toLong: ['', [Validators.required]],
      status: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })

    this.parcelform.get('weight')?.valueChanges.subscribe(res => {
      this.parcelform.get('price')!.setValue(res * 50)

      this.parcelform.get('fromLat')?.setValue(this.senderLat)
      this.parcelform.get('fromLong')?.setValue(this.senderLong)
      this.parcelform.get('fromLoc')?.setValue(this.senderAddress)


      this.parcelform.get('toLat')?.setValue(this.receiverLat)
      this.parcelform.get('toLong')?.setValue(this.receiverLong)
      this.parcelform.get('toLoc')?.setValue(this.receiverAddress)

    })
    this.userService.getUsers().subscribe((users)=>{
      this.emails = users

    })

    
  }

  addParcel() {

    console.log(this.parcelform.value);

    const newParcel: IParcel = { ...this.parcelform.value }
    console.log(newParcel);

    this.store.dispatch(Actions.AddParcel({ newParcel: this.parcelform.value }))
    this.filled=true
    this.store.dispatch(Actions.LoadParcels())
    this.router.navigate(['/admin/all-orders'])


  }

}
