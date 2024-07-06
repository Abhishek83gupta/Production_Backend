import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"16kb"}))     // Accepting json data // for form data
app.use(express.urlencoded({extended:true,limit:"16kb"}))             // data coming form url  // for url data
app.use(express.static("public"))   // for store images,pdf,etc
app.use(cookieParser()) // for cookies




// routes 
import userRouter from './routes/user.routes.js'



// routes Declaration 
app.use("/api/v1/users", userRouter)










export  {app}