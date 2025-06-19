import bcrypt from "bcryptjs"
import User from "../models/user.models.js"

export const login = async (req,res) =>{
    try{
        const {username, email, password} = req.body;
        const hashedPass = bcrypt.hashSync(password,10);
        const user =  new User({username,email,password:hashedPass})
        await user.save()
        res.status(200).json({message:"user created succesfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server Error"})
    }
    


}