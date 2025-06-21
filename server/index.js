import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import cors from "cors"




const app = express()


dotenv.config()

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(express.json())

app.use(cors({
    origin : "http://localhost:5173",
    credentials:true
}))

mongoose.connect(URL).then(()=>{
    console.log("Succesfully Connected")
}).catch((err) =>{
    console.log(err)
})




app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

app.listen(PORT, ()=>{
    console.log(`Listening on port:${PORT}`)
})


