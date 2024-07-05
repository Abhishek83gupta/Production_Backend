// const dotenv = require('dotenv').config({path:' ./env'})    // for common js 
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"
dotenv.config({
    path:'./.env'
})                     // config method which takes an object
 
connectDB()
.then(()=>{
   app.listen(process.env.PORT || 8000,()=>{
     console.log(`Server is running on port ${process.env.PORT}`);
   })
})
.catch((err)=>{
  console.log(`MONGO DB connection Failed !!!!`,err);
})



































// import mongoose from 'mongoose'
// import { DB_NAME } from './constant.js'

// import express from 'express'
// const app = express()
// ( async ()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/                   
//     ${DB_NAME}`)
//     app.on("error",(error)=>{           // Express listener 
//         console.log("ERROR:",error);
//         throw error
//     })            

//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("Error",error)
//     throw err
//   } 
// })()


