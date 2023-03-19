
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);


const DB = "mongodb://localhost:27017/shopifyUserDB";


mongoose.connect(DB,{
    useNewUrlParser:true,
    
    useUnifiedTopology: true,
    
    }).then(()=>{
        console.log('connection successful')
    }).catch((err)=>{
        console.log(err);
    });