const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
const cors = require('cors')

app.use(cors())
const Port = process.env.PORT;
const todo_router = require("./routes/todo_routes")
app.use("/todo",todo_router)
app.listen(Port,()=>{
    console.log(`server is listening on port ${Port}`)
})