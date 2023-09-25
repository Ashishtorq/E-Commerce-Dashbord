const express = require('express');
const app = express();
const port = 5500;


app.get('/',(req,res)=>{
    res.send("Its Working !!!")
})

app.listen(5500,(req,res)=>{
    console.log(`Port Connected at ${port}`);
})