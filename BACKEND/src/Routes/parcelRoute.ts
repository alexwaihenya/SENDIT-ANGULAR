import { Router } from "express";
import { addParcel, deleteParcel, deliverParcel, getAllParcels, sentParcel, updateParcel } from "../Controllers/parcelController";



const parcelrouter = Router()
parcelrouter.put('/add',addParcel)
parcelrouter.delete("/deleteparcel/:parcel_id",deleteParcel)
parcelrouter.get('/all',getAllParcels)
parcelrouter.put('/update/:parcel_id',updateParcel)
parcelrouter.put("/sent/:parcel_id",sentParcel)
parcelrouter.put("/delivered/:parcel_id",deliverParcel)




export default parcelrouter