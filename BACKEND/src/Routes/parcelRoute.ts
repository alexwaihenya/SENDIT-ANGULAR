import { Router } from "express";
import { addParcel, deleteParcel, getAllParcels } from "../Controllers/parcelController";



const parcelrouter = Router()
parcelrouter.post('/add',addParcel)
parcelrouter.delete("/deleteparcel/:parcel_id",deleteParcel)
parcelrouter.get('/all',getAllParcels)




export default parcelrouter