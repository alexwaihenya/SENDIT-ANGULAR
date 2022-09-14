import { createAction, props } from "@ngrx/store";
import { IParcel } from "src/app/intefaces";


export const SelectedId= createAction('SelectedId', props<{id:number}>())

export const LoadParcels = createAction('LoadParcels')
export const LoadParcelsSuccess = createAction('LoadParcelsSuccess',
props<{orders:IParcel[]}>())
export const LoadParcelsFailure = createAction('LoadParcelsFailure',
props<{error:string}>())


export const AddParcel= createAction('AddParcel',
props<{newOrder:IParcel}>()
)
export const AddParcelSuccess= createAction('AddParcelSuccess',
props<{addMessage:string}>()
)
export const AddParcelFailure= createAction('AddParcelFailure',
props<{error:string}>()
)

export const DeleteParcel = createAction('DeleteParcel',
props<{id:number}>())
export const DeleteParcelSuccess = createAction('DeleteParcelSuccess',
props<{deletemessage:string}>())
export const DeleteParcelFailure=createAction('DeleteParcelFailure',
props<{error:string}>())