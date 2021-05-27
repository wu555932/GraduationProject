const express = require('express')
const app = express()
const mysql = require('mysql')

app.use(express.static("../dist"));
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:'graduation'
})
db.connect((err)=>{
    if(err) throw err;
    console.log('连接成功');
})

// 监听端口
app.listen(3000,()=>{
    console.log("API服务器启动完毕!");  
  })