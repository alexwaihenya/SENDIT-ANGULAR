export interface IUser{
    username:string
    email:string
    password:string
    role:string
    token:string
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