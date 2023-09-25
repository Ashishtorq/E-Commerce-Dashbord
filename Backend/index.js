const express = require('express');
const app = express();
cont port = 5500;




app.listen(5500,(req,res)=>{
    console.log(`Port Connected at ${port}`);
})