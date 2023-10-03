import { userModel } from "../models/users.js";
import bcrypt from 'bcryptjs'

export const signup = async(req,res)=>{

    try{
        const {name,email,password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await userModel.create({name,email,password:hashedPassword})
        return res.status(201).json({
            status:'success',
            message:"resource created",
            data:newUser
        })
    }catch(err){
        return res.status(400).json({
            err
        })
    }
}

export const login = async(req,res)=>{
    try{
        
        const {email,password} = req.body

        const currentUser = await userModel.findOne({email})

        if(currentUser){
          const isCorrectPassword = await bcrypt.compare(password,currentUser.password)
            if(isCorrectPassword){
               return res.status(200).json({
                    status:"success",
                    login:true
                })

             
            }

            return res.status(200).json({
                status:"failed",
                message:'incorrect email or password'
            })
        }

        return res.status(400).json({
            status:"failed",
            message:"user with this email not found"
        })
        
    }catch(err){
            return res.status(400).json({
                message:err.message
            })
    }
}