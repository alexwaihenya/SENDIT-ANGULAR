export interface IUser{
    user_id:number
    username:string
    email:string
    password:string
    role:string
    token:string
    status:string

}

export interface LoginDetails {
    email: string;
    password: string;
  }
  export interface LoginResponse {
    message: string;
    role: string;
    username: string;
    token: string;
    error: boolean;
  }