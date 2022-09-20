import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/intefaces/user";




export const login = createAction('login',
props<{user:IUser}>()
)
export const LoginSuccess = createAction('LoginSuccess',
props<{user:IUser[]}>()
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