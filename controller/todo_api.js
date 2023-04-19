const connection = require("../modal/config")
const addTask = async(req,res)=>{
    try {
        const data= [req.body]
        console.log("data is........",data)
       
       
     
        const sqlQuery = `INSERT INTO todo SET ?`
        connection.query(sqlQuery,data,(err,result)=>{
           if(err){
            return res.status(400).json({message:err.sqlMessage})
           }
           console.log("result",result)
           res.status(200).json({message:"inserted successfully",Response:result})
           
        })
          
        
       
       
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
 const displayTask = async(req,res)=>{
    try {
        const sqlQuery = `SELECT * FROM todo`
        connection.query(sqlQuery,(err,result)=>{
           if(err){
            return res.status(401).json({message:"something went wrong"})
           }
           res.status(200).json({message:"inserted successfully",Response:result})
           
        })
    } catch (error) {
        return res.status(400).json({message:error})
    }
 }
 const deleteTask = (req,res)=>{
    try {
        const id = [req.params.id]
        const sqlQuery = `DELETE  FROM todo WHERE id = ?`
        connection.query(sqlQuery,id,(err,result)=>{
           if(err){
            return res.status(401).json({message:err.message})
           }
          res.status(200).json({message:"deleted successfully",Response:result})
           
        })
    } catch (error) {
        return res.status(400).json({message:error})
    }
 }
const UpdateTask = async(req,res)=>{
    try {
        const todoData = [req.body.task,req.params.id]
        const sqlQuery = `UPDATE todo SET task=? WHERE id = ?`
        connection.query(sqlQuery,todoData,(err,result)=>{
           if(err){
            return res.status(401).json({message:err.message})
           }
          res.status(200).json({message:"updated successfully",Response:result})
           
        })
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
const setCompleted = async(req,res)=>{
    try {
        const todoData = [req.body.task,req.params.id]
        const sqlQuery = `UPDATE todo SET completed=? WHERE id = ?`
        connection.query(sqlQuery,todoData,(err,result)=>{
           if(err){
            return res.status(401).json({message:err.message})
           }
          res.status(200).json({message:"updated successfully",Response:result})
           
        })
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
module.exports = {addTask,displayTask,deleteTask,UpdateTask,setCompleted}