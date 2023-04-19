const mysql = require('mysql')
const connection = mysql.createConnection({
     host:"localhost",
     password:"",
     user:"root",
     database:"todolist",
     port:3306
})
connection.connect((err)=>{
    if(err){
        console.log("connection is not created")
    }
    else{
        console.log("connection is created")
    }
})
module.exports = connection