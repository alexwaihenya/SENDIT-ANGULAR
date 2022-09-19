import express from 'express'
import cron from 'node-cron'
import SendEmails from './EmailService/EmailService'
<<<<<<< HEAD
import SendDelivery from './EmailService/DeliveryService'
=======
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3

const app= express()




const run =()=>{
cron.schedule('*/5 * * * * *', async() => {
  console.log('running a 5 seconds');
  await SendEmails()
<<<<<<< HEAD
  // await SendDelivery()
  
=======
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
})
}
run()


app.listen(4000, ()=>{
    console.log('App is Running');
    
})
