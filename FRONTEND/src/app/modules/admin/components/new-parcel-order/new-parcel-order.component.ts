import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-parcel-order',
  templateUrl: './new-parcel-order.component.html',
  styleUrls: ['./new-parcel-order.component.css']
})
export class NewParcelOrderComponent implements OnInit {
  parcelform!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  onCreate(){

  }

}
