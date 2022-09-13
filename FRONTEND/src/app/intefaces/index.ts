export interface LoginDetails {email:string, password:string}
export interface LoginResponse {
     message:string
     role:string, 
     name:string, 
     token:string
     error:boolean}

export interface UserDetail{
    role:string
    names:string
}


export interface UpdateResponse{
    message:string
}



export interface IParcel{
    id?:number, 
    sender:string
    receiver:string
    parcel_desc:string
    from:Location
    to:Location
    status:string
    receiveremail:string
    dispatch_date:string
    delivery_date:string
    weight:number
    price:number
}

export interface Location {
    address: string;
    latitute?: number;
    longitude?: number;
  }