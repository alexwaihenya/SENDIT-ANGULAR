import { createAction, props } from '@ngrx/store';
import { IParcel } from 'src/app/intefaces';

export const SelectedId = createAction('SelectedId', props<{ id: number }>());

export const LoadParcels = createAction('LoadParcels');
export const LoadParcelsSuccess = createAction(
  'LoadParcelsSuccess',
  props<{ parcels: IParcel[] }>()
);
export const LoadParcelsFailure = createAction(
  'LoadParcelsFailure',
  props<{ error: string }>()
);

export const AddParcel = createAction(
  'AddParcel',
  props<{ newParcel: IParcel }>()
);
export const AddParcelSuccess = createAction(
  'AddParcelSuccess',
  props<{ addMessage: string }>()
);
export const AddParcelFailure = createAction(
  'AddParcelFailure',
  props<{ error: string }>()
);

export const UpdateParcel = createAction(
  'UpdateParcel',
  props<{parcel_id:number,updateparcel:IParcel}>()
);
export const UpdateParcelSuccess = createAction(
  'UpdateParcelSuccess',
  props<{updateMessage:string}>()
);
export const UpdateParcelFailure = createAction(
  'UpdateParcelFailure',
  props<{error:string}>()
);

export const UpdateParcelStatus = createAction(
  'UpdateParcelStatus',
  props<{parcel_id: number,updateParcelStatus:IParcel}>()
);
export const UpdateParcelStatusSuccess = createAction(
  'UpdateParcelStatusSuccess',
  props<{updateStatusMessage:string}>()
);
export const UpdateParcelStatusFailure = createAction(
  'UpdateParcelStatusFailure',
  props<{error:string}>()
);



export const DeleteParcel = createAction(
  'DeleteParcel',
  props<{ parcel_id: number }>()
);

export const DeleteParcelSuccess = createAction(
  'DeleteParcelSuccess',
  props<{ deletemessage: string }>()
);
export const DeleteParcelFailure = createAction(
  'DeleteParcelFailure',
  props<{ error: string }>()
);
