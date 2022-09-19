import { Router } from "express";
import { addParcel, deleteParcel, deliverParcel, getAllParcels, sentParcel, updateParcel } from "../Controllers/parcelController";



const parcelrouter = Router()
<<<<<<< HEAD
parcelrouter.put('/add',addParcel)
=======
parcelrouter.post('/add',addParcel)
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
parcelrouter.delete("/deleteparcel/:parcel_id",deleteParcel)
parcelrouter.get('/all',getAllParcels)
parcelrouter.put('/update/:parcel_id',updateParcel)
parcelrouter.put("/sent/:parcel_id",sentParcel)
parcelrouter.put("/delivered/:parcel_id",deliverParcel)




export default parcelrouter