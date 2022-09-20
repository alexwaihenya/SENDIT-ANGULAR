import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlConfig} from '../Config/Config'
dotenv.config()
import sendMail from '../Helpers/Email'
interface User{
    user_id:number
    username:string
    email:string
    password:string
    is_sent:string
}


const SendEmails= async()=>{
const pool = await mssql.connect(sqlConfig)
const users:User[]= await(await pool.request().query(`
SELECT email,username FROM USERS WHERE is_sent='no'`)).recordset
console.log(users);


  for(let user of users){
    console.log(user);
    

    ejs.renderFile('template/registration.ejs',{name:user.username} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:user.email,
            subject:"Welcome To SendIT. ",
            html:data,
            attachments:[
                {
                    // filename:'sendIT.txt',
                    content:`Dear: ${user.username},Welcome to the leading world delivery company.`
                }
            ]
        }

        try {
            
            await sendMail(messageoption)

            await pool.request().query(`UPDATE USERS SET is_sent='yes' WHERE is_sent='no' `)
            console.log('Welcome Email is Sent');
           
        
            
            
        } catch (error) {
            console.log(error);
            
        }


    })

  }


 }

export default SendEmails
