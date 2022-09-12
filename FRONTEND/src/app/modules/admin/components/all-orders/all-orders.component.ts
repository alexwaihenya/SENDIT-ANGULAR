import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IOrder } from 'src/app/intefaces';
import { getOrder, OrderState } from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions'
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  id!:number

  order$=this.store.select(getOrder)
    
  
  

  constructor(private route:ActivatedRoute,private store:Store<OrderState>) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id=+param['id']
    })
  this.store.dispatch(Actions.SelectedId({id:this.id}))
  this.getAll()

  }
  
  getAll(){
    this.store.dispatch(Actions.LoadOrders())
    
  }

}
