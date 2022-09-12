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

// export interface IOrder{
//     id?:number,
//     senderName:string
//     receiverName:string
//     senderEmail:string
//     receiverEmail:string
//     origin:string
//     destination:string
//     dispatchedDate:string
//     deliveryDate:string
//     weight:number
//     price:number
// }

export interface IOrder{
    id?:number, 
    senderemail:string
    receiveremail:string
    parcel_desc:string
    address:string
    receiveremail1:string
    dispatch_date:string
    delivery_date:string
    weight:number
    price:number
}
