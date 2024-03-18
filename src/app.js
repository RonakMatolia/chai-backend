import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()

app.use(cors({    // cors for kis kis use karne dena hai 
    origin : process.env.CORS_ORIGIN,
    credentials: true

}))

app.use(express.json({limit: "16kb"}))    // json input req.body mai store kar denga 
app.use(express.urlencoded({extended: true,limit: "16kb"}))     // url mai jo input hota hai wo lega 
app.use(express.static("public"))   // jo bhi asset like photo , video usske liye public folder mai dal dunga 
app.use(cookieParser())   // cookies read kar paye 




export { app }