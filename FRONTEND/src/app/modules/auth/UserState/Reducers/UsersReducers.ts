
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
    registerMessage: string;
    error:string;
    loginMessage:string;
}

const initialState:UserState={
    users:[],
    result:'',
    isLoading:false,
    isLoadingSuccess:false,
    isLoadingFailure:false,
    user_id:0,
    registerMessage: '',
    loginMessage:'',
    error: ''
}

const getUserFeatureState = createFeatureSelector<UserState>('user');
export const getUsers = createSelector(
    getUserFeatureState,
    (state) => state.users
  );

  export const getUserid = createSelector(
    getUserFeatureState,
    (state) => state.user_id
  );

  // export const getUser = createSelector(
  //   getUserFeatureState,
  //   getUserid,
  //   (state,role)=>
  //   // state.users.find((user)=> user.role===role)
  // )

  export const UserReducer = createReducer(
    initialState,
    on(Actions.RegisterSuccess,(state,action): UserState=>{
        return {...state,registerMessage:action.registerMessage}
    }),
    on(Actions.RegisterFailure,(state,action):UserState=>{
      return {...state,error:action.error}

    }),
    on(Actions.LoginSuccess,(state,action):UserState=>{
      return {...state,loginMessage:action.loginMessage}
    }),
    on(Actions.LoginFailure,(state,action):UserState=>{
      return {...state,error:action.error}
    })
    
  )