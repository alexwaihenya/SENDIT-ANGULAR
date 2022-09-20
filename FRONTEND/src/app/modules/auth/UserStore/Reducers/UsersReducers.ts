import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IUser } from "src/app/intefaces/user";
import * as Actions from '../Actions/UsersActions'






export interface UserState{
    users:IUser[];
    result:any;
    isLoading:boolean;
    isLoadingSuccess:boolean;
    isLoadingFailure:boolean;
    user_id:number;
}

const initialState:UserState={
    users:[],
    result:'',
    isLoading:false,
    isLoadingSuccess:false,
    isLoadingFailure:false,
    user_id:0
}

const getUserFeatureState = createFeatureSelector<UserState>('user');
export const getUsers = createSelector(
    getUserFeatureState,
    (state) => state.users
  );

  export const getParcelid = createSelector(
    getUserFeatureState,
    (state) => state.user_id
  );

  // export const UserReducer = createReducer(
  //   initialState,
  //   on(Actions.RegisterSuccess,(state,action): UserState=>{
  //       return {...state,registerMessage:action.registerMessage}
  //   })
  // )