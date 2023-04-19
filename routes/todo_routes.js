const express = require("express")
const todo_router = express.Router()
const {addTask,displayTask,deleteTask, UpdateTask,setCompleted} = require("../controller/todo_api")
todo_router.post('/addtask',addTask)
todo_router.get('/showlist',displayTask)
todo_router.delete('/deletetask/:id',deleteTask)
todo_router.put("/updatetodo/:id",UpdateTask)
todo_router.put("/setcomplete/:id",setCompleted)
module.exports = todo_router