import { createAction, props } from "@ngrx/store";
import { IParcel } from "src/app/intefaces";


export const SelectedId= createAction('SelectedId', props<{id:number}>())

export const LoadOrders = createAction('LoadOrders')
export const LoadOrdersSuccess = createAction('LoadOrderSuccess',
props<{orders:IParcel[]}>())
export const LoadOrdersFailure = createAction('LoadOrdersFailure',
props<{error:string}>())


export const AddOrder= createAction('AddOrder',
props<{newOrder:IParcel}>()
)
export const AddOrderSuccess= createAction('AddOrderSuccess',
props<{addMessage:string}>()
)
export const AddOrderFailure= createAction('AddOrderFailure',
props<{error:string}>()
)

export const DeleteOrder = createAction('DeleteOrder',
props<{id:number}>())
export const DeleteOrderSuccess = createAction('DeleteOrderSuccess',
props<{deletemessage:string}>())
export const DeleteOrderFailure=createAction('DeleteOrderFailure',
props<{error:string}>())