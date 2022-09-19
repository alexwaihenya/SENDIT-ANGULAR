import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlConfig} from '../Config/Config'
dotenv.config()
import sendMail from '../Helpers/Email'
<<<<<<< HEAD
interface User{
    user_id:number
    username:string
    email:string
    password:string
    is_sent:string
=======
interface Task{
    id:number
    name:string
    description:string,
    end_date:string,
    email:string
    task:string
    issent:string
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
}


const SendEmails= async()=>{
const pool = await mssql.connect(sqlConfig)
<<<<<<< HEAD
const users:User[]= await(await pool.request().query(`
SELECT email,username FROM USERS WHERE is_sent='no'`)).recordset
console.log(users);


  for(let user of users){
    console.log(user);
    

    ejs.renderFile('template/registration.ejs',{name:user.username} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:user.email,
            subject:"Welcome To SendIT Delivery Services. ",
            html:data,
            attachments:[
                {
                    filename:'sendIT.txt',
                    content:`Dear: ${user.username},Welcome to the leading world delivery company.`
=======
const tasks:Task[]= await(await pool.request().query(`
SELECT u.email,p.id FROM Users u INNER JOIN Projects p ON p.email=u.email WHERE p.email IS NOT NULL and issent=0 and project_status=0`)).recordset
console.log(tasks);


  for(let task of tasks){
    console.log(task);
    

    ejs.renderFile('template/registration.ejs',{name:task.name,task:task.description} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:task.email,
            subject:"Jitu Project Task",
            html:data,
            attachments:[
                {
                    filename:'task.txt',
                    content:`You have neen assigned a task : ${task.description}`
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
                }
            ]
        }

        try {
            
            await sendMail(messageoption)
<<<<<<< HEAD
            await pool.request().query(`UPDATE USERS SET is_sent='yes' WHERE is_sent='no' `)
            console.log('Welcome Email is Sent');
           
=======
            await pool.request().query(`UPDATE Projects SET issent=1 WHERE issent=0`)
            console.log('Email is Sent');
            console.log(task.id);
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
            
            
        } catch (error) {
            console.log(error);
            
        }


    })

  }


 }

export default SendEmails
