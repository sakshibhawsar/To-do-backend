import express from "express"

import { connectDB } from "./mongo-DB/connection.js"
import routes from "./routes-1.js"
import cors from "cors"

let app = express()
app.use(express.json())
app.use(cors(
    {origin: "*"}
    //
))

app.use("/todo", routes) // this is the middleware

connectDB().then(()=>{
    app.listen(4752, () => console.log("Server started at 4752"))
})
.catch((err)=>{
    console.log("Error",err)
}) //this is for connecting to the database
