import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IParcel } from "src/app/intefaces";
import * as Actions from '../Actions/OrdersActions';



export interface OrderState {
    orders: IParcel[];
    ordersError: string;
    error: string;
    deleteMessage: string;
    orderid: number;
    addMessage: string;
    // customers: Icustomer[];
  }

const initialState: OrderState = {
    orders: [],
    ordersError: '',
    error: '',
    deleteMessage: '',
    orderid: 0,
    addMessage: '',
    // customers: [],
  };



const getProductFeatureState = createFeatureSelector<OrderState>('order');

export const getOrders = createSelector(
  getProductFeatureState,
  (state) => state.orders
);

export const getOrderid = createSelector(
  getProductFeatureState,
  (state) => state.orderid
);
export const getOrder = createSelector(
  getProductFeatureState,
  getOrderid,
  (state, parcelid) => state.orders.find((order) => order.parcel_id === parcelid)
);


export const OrderReducer = createReducer(
    initialState,
    on(Actions.LoadParcelsSuccess, (state, action): OrderState => {
        return { ...state, orders: action.parcels };
    }),
    on(Actions.LoadParcelsFailure, (state, action): OrderState => {
        return { ...state, ordersError: action.error };
    }),
    on(Actions.DeleteParcelSuccess, (state, action): OrderState => {
        return { ...state, deleteMessage: action.deletemessage };
    }),
    on(Actions.DeleteParcelFailure, (state, action): OrderState => {
        return { ...state, error: action.error };
    }),
    on(Actions.SelectedId, (state, action): OrderState => {
        return { ...state, orderid: action.id };
    }), on(Actions.AddParcelSuccess, (state, action): OrderState => {
        return { ...state, addMessage: action.addMessage }
    }), on(Actions.AddParcelFailure, (state, action): OrderState => {
        return { ...state, error: action.error }

    }));