import { createAction, props } from "@ngrx/store";
import { IParcel } from "src/app/intefaces";


export const SelectedId= createAction('SelectedId', props<{id:number}>())

export const LoadParcels = createAction('LoadParcels')
export const LoadParcelsSuccess = createAction('LoadParcelsSuccess',
props<{parcels:IParcel[]}>())
export const LoadParcelsFailure = createAction('LoadParcelsFailure',
props<{error:string}>())


export const AddParcel= createAction('AddParcel',
props<{newParcel:IParcel}>()
)
export const AddParcelSuccess= createAction('AddParcelSuccess',
props<{addMessage:string}>()
)
export const AddParcelFailure= createAction('AddParcelFailure',
props<{error:string}>()
)

export const DeleteParcel = createAction('DeleteParcel',
<<<<<<< HEAD
props<{parcel_id:number}>())
=======
<<<<<<< HEAD
props<{parcel_id:number}>())
=======
props<{id:number}>())
>>>>>>> 12ebafb145af38e63c15c48887952868a39f71e6
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
export const DeleteParcelSuccess = createAction('DeleteParcelSuccess',
props<{deletemessage:string}>())
export const DeleteParcelFailure=createAction('DeleteParcelFailure',
props<{error:string}>())