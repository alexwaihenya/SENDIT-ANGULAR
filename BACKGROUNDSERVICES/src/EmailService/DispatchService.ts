import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlConfig} from '../Config/Config'
dotenv.config()
import sendMail from '../Helpers/Email'
import Connection from '../DatabaseHelpers/db'
interface Parcel{
    parcel_id:number, 
    senderemail:string
    receiveremail:string
    parcel_desc:string
    fromLoc:Location
    toLoc:Location
    status:string
    dispatch_date:string
    delivery_date:string
    weight:number
    price:number
}

const db = new Connection()


const SendDispatch = async()=>{

    
const pool = await mssql.connect(sqlConfig)
// const parcels:Parcel[]= await (await db.exec("dispatchEmail")).recordset

const parcels:Parcel[]= await(await pool.request().query(`
// SELECT * FROM PARCELS WHERE is_sent='no' AND parcel_id=@parcel_id`)).recordset
// console.log("disparct...");

console.log(parcels);


  for(let parcel of parcels){
    console.log(parcel);
    

    ejs.renderFile('template/dispatch.ejs',{parcelid:parcel.parcel_id,senderemail:parcel.senderemail,fromLoc:parcel.fromLoc, delivery_date:parcel.delivery_date,toLoc:parcel.toLoc} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:parcel.receiveremail,
            subject:"Parcel dispatched successfully...",
            html:data,
            attachments:[
                {
                    // filename:'sendIT.txt',
                    content:`parcel details : ${parcel.parcel_id}`
                }
            ]

           
        }

        try {
            
            await sendMail(messageoption)
            await db.exec('updateDispatchEmail',{parcel_id:parcel.parcel_id})
            // await pool.request().query(`UPDATE PARCELS SET is_sent='yes' WHERE parcel_id=@parcel_id `)
            console.log('Dispatch email is sent...');
           
            
            
        } catch (error) {
            console.log(error);
            
        }


    })

  }


 }

export default SendDispatch