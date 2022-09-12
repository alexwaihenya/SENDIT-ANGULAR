import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IOrder } from "src/app/intefaces";
import * as Actions from '../Actions/OrdersActions';



export interface OrderState {
    orders: IOrder[];
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
  (state, id) => state.orders.find((order) => order.id === id)
);


export const OrderReducer = createReducer(
    initialState,
    on(Actions.LoadOrdersSuccess, (state, action): OrderState => {
        return { ...state, orders: action.orders };
    }),
    on(Actions.LoadOrdersFailure, (state, action): OrderState => {
        return { ...state, ordersError: action.error };
    }),
    on(Actions.DeleteOrderSuccess, (state, action): OrderState => {
        return { ...state, deleteMessage: action.deletemessage };
    }),
    on(Actions.DeleteOrderFailure, (state, action): OrderState => {
        return { ...state, error: action.error };
    }),
    on(Actions.SelectedId, (state, action): OrderState => {
        return { ...state, orderid: action.id };
    }), on(Actions.AddOrderSuccess, (state, action): OrderState => {
        return { ...state, addMessage: action.addMessage }
    }), on(Actions.AddOrderFailure, (state, action): OrderState => {
        return { ...state, error: action.error }

    }));