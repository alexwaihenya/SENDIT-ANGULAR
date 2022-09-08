import { Request } from "express"

export interface userCustom extends Request{

    body:{
        user_id: number
        username:string
        email: string
        password: string
        role: string

    }

   
}
export interface User{
    id: number
    username:string
    email: string
    password: string

}