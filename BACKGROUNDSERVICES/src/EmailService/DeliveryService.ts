import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlConfig} from '../Config/Config'
dotenv.config()
import sendMail from '../Helpers/Email'
<<<<<<< HEAD
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


const SendDelivery = async()=>{
const pool = await mssql.connect(sqlConfig)
const parcels:Parcel[]= await(await pool.request().query(`
SELECT * FROM PARCELS WHERE is_delivered='no'`)).recordset
console.log(parcels);


  for(let parcel of parcels){
    console.log(parcel);
    

    ejs.renderFile('template/delivery.ejs',{senderemail:parcel.senderemail,fromLoc:parcel.fromLoc, delivery_date:parcel.delivery_date,toLoc:parcel.toLoc} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:parcel.receiveremail,
            subject:"Parcel delivered successfully...",
            html:data,
            attachments:[
                {
                    filename:'sendIT.txt',
                    content:`parcel details : ${parcel.parcel_id}`
                }
            ]

           
=======
interface Task{
    id:number
    project_name:string
    project_desc:string,
    project_timeline:string,
    email:string
    task:string
    issent:string
}


const SendEmails= async()=>{
const pool = await mssql.connect(sqlConfig)
const tasks:Task[]= await(await pool.request().query(`
SELECT u.email,p.id FROM Users u INNER JOIN Projects p ON p.email=u.email WHERE p.email IS NOT NULL and issent=0 and project_status=1`)).recordset
console.log(tasks);


 for(let task of tasks){

    ejs.renderFile('template/complete.ejs',{project_name:task.project_name,task:task.project_desc} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:task.email,
            subject:"completed task",
            html:data,
            attachments:[
                {
                    filename:'task.txt',
                    content:`I have completed my task : ${task.project_desc}`
                }
            ]
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
        }

        try {
            
            await sendMail(messageoption)
<<<<<<< HEAD
            await pool.request().query(`UPDATE PARCELS SET is_delivered='yes' WHERE parcel_id=@parcel_id `)
            console.log('Delivery email is sent...');
           
            
=======
            await pool.request().query(`UPDATE Projects SET issent=1 WHERE project_status=0`)
            console.log('Email is Sent');
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
            
        } catch (error) {
            console.log(error);
            
        }


    })

<<<<<<< HEAD
  }


 }

export default SendDelivery
=======
 }


}

export default SendEmails
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
