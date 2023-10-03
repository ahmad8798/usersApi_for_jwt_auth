import { userModel } from "../models/users.js";

export const getUsers = async(req,res)=>{
    try{
        const users  = await userModel.find()
        return res.status(200).json({
            users
        })
    }catch(err){
        return res.status(400).json({
            message:err.message
        })
    }
}