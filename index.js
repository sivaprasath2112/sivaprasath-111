var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    res.send('Hello from nodejs')
})
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
console.log(`server is running on port ${PORT}`)
})