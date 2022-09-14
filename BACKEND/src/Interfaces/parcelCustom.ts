import { Request } from "express";


export interface parcelCustom extends Request{

    body:{
        parcel_id:number
        senderemail:string
        receiveremail:string
        parcel_desc:string,
        fromLoc:string
        toLoc:string
        // delivery_date:string
        status:string
        weight:number
        price:number
        is_sent:string
    }

}