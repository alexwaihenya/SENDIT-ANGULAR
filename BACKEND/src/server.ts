import express, { json } from "express"
import cors from 'cors'
import router from "./Routes/userRoute";
import parcelrouter from "./Routes/parcelRoute";

const app = express()
app.use(json());
app.use(cors());

app.use("/users",router)
app.use("/parcels",parcelrouter)


app.listen(5000,()=>{
    console.log('App is running');
    
})