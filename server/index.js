import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "./routes/user.route.js"




const app = express()

dotenv.config()

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;


mongoose.connect(URL).then(()=>{
    console.log("Succesfully Connected")
}).catch((err) =>{
    console.log(error)
})




app.use("/api/user",userRoutes)

app.listen(PORT, ()=>{
    console.log(`Listening on port:${PORT}`)
})


