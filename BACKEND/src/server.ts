import express, { json } from "express"
import cors from 'cors'
import router from "./Routes/userRoute";

const app = express()
app.use(json());
app.use(cors());

app.use("/users",router)


app.listen(5000,()=>{
    console.log('App is running');
    
})