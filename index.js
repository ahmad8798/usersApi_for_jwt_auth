import  express  from "express";
import cors from 'cors'
import mongoose from "mongoose";
import Authrouter from "./routes/AuthRoute.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/UsersRoute.js";

const app =  express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(Authrouter)
app.use(userRouter)
mongoose.connect('mongodb://127.0.0.1/usersDb')
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"success",
        data:"hello world"
    })
})

app.listen(7001,()=>{
    console.log("app running at port 7001")
})