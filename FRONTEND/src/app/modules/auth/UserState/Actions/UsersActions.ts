import { createAction, props } from "@ngrx/store";
import { LoginDetails, LoginResponse } from "src/app/intefaces";
import { IUser } from "src/app/intefaces/user";




export const login = createAction('login',
props<{userCredentials:LoginDetails}>()
)
export const LoginSuccess = createAction('LoginSuccess',
props<{loginMessage:string}>()
)
export const LoginFailure = createAction('LoginFailure',
props<{error:string}>()
)


export const Register = createAction('RegisterUser',
props<{newUser:IUser}>())

export const RegisterSuccess = createAction('RegisterSuccess',
props<{registerMessage:string}>())

export const RegisterFailure = createAction('RegisterFailure',
props<{error:string}>())