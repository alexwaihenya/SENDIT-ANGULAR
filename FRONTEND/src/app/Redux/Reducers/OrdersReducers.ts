import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { IParcel } from 'src/app/intefaces';
import * as Actions from '../Actions/OrdersActions';

export interface ParcelState {
  parcels: IParcel[];
  parcelsError: string;
  error: string;
  deleteMessage: string;
  parcel_id: number;
  addMessage: string;
  updateMessage:string;
}

const initialState: ParcelState = {
  parcels: [],
  parcelsError: '',
  error: '',
  deleteMessage: '',
  parcel_id: 0,
  addMessage: '',
  updateMessage:''
};

const getParcelFeatureState = createFeatureSelector<ParcelState>('parcel');

export const getParcels = createSelector(
  getParcelFeatureState,
  (state) => state.parcels
);

export const getParcelid = createSelector(
  getParcelFeatureState,
  (state) => state.parcel_id
);
export const getParcel = createSelector(
  getParcelFeatureState,
  getParcelid,
  (state, parcelid) =>
    state.parcels.find((parcel) => parcel.parcel_id === parcelid)
);
export const updateParcel = createSelector(
  getParcelFeatureState,
  state=>state.updateMessage
)

export const ParcelReducer = createReducer(
  initialState,

  on(Actions.AddParcelSuccess, (state, action): ParcelState => {
    return { ...state, addMessage: action.addMessage };
  }),
  on(Actions.AddParcelFailure, (state, action): ParcelState => {
    return { ...state, error: action.error };
  }),
  on(Actions.SelectedId, (state, action): ParcelState => {
    return { ...state, parcel_id: action.id };
  }),

  on(Actions.LoadParcelsSuccess, (state, action): ParcelState => {
    return { ...state, parcels: action.parcels };
  }),
  on(Actions.LoadParcelsFailure, (state, action): ParcelState => {
    return { ...state, parcelsError: action.error };
  }),

  on(Actions.UpdateParcelSuccess,(state,action):ParcelState=>{
    return {...state,updateMessage:action.updateMessage};
  }),
  on(Actions.UpdateParcelFailure,(state,action):ParcelState=>{
    return {...state,error:action.error}
  }),

  on(Actions.UpdateParcelStatusSuccess,(state,action):ParcelState=>{
    return {...state,updateMessage:action.updateStatusMessage};
  }),
  on(Actions.UpdateParcelStatusFailure,(state,action):ParcelState=>{
    return {...state,error:action.error}
  }),


  on(Actions.DeleteParcelSuccess, (state, action): ParcelState => {
    return { ...state, deleteMessage: action.deletemessage };
  }),
  on(Actions.DeleteParcelFailure, (state, action): ParcelState => {
    return { ...state, error: action.error };
  })
 

);
