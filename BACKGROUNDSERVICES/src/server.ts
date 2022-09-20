import express from 'express'
import cron from 'node-cron'
import SendEmails from './EmailService/EmailService'
import SendDelivery from './EmailService/DeliveryService'
import SendDispatch from './EmailService/DispatchService'

const app= express()




const run =()=>{
cron.schedule('*/5 * * * * *', async() => {
  console.log('running a 5 seconds');
  await SendEmails()
  await SendDispatch()
  await SendDelivery()
 
  
})



}
run()


app.listen(4000, ()=>{
    console.log('App is Running');
    
})
