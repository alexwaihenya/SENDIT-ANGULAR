import { Request } from "express";


export interface parcelCustom extends Request{

    body:{
        parcel_id:number
        senderemail:string
        receiveremail:string
        parcel_desc:string,
        fromLoc:string
        fromLat:number
        fromLong:number
        toLoc:string
        toLat:number
        toLong:number
        status:string
        weight:number
        price:number
        is_sent:string
    }

}