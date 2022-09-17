import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlConfig} from '../Config/Config'
dotenv.config()
import sendMail from '../Helpers/Email'
interface Task{
    id:number
    name:string
    description:string,
    end_date:string,
    email:string
    task:string
    issent:string
}


const SendEmails= async()=>{
const pool = await mssql.connect(sqlConfig)
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
                }
            ]
        }

        try {
            
            await sendMail(messageoption)
            await pool.request().query(`UPDATE Projects SET issent=1 WHERE issent=0`)
            console.log('Email is Sent');
            console.log(task.id);
            
            
        } catch (error) {
            console.log(error);
            
        }


    })

  }


 }

export default SendEmails
