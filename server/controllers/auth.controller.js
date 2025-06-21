import bcrypt from "bcryptjs"
import User from "../models/user.models.js"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

export const signUp = async (req,res) =>{
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

export const login = async(req, res) => {
    const {email, password} = req.body;
    try{
        const correctUser = await User.findOne({email})
        if(!correctUser) return res.status(404).json({message:"User does not exist"});
        const validPassword = bcrypt.compareSync(password, correctUser.password)
        if(!validPassword) return res.status(401).json({message:"Invalid credentials"});
        const token = jwt.sign({id:correctUser._id},process.env.JWT_SECRET)
        const {password:hashedPass, ...rest} = correctUser._doc; 
        res.cookie("acces_token", token, {httpOnly:true, expires: new Date(Date.now() + 3600000)}).status(200).json({message:"Login Succesfull",value: rest})
         


    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
}