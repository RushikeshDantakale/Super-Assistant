
const mongoose = require('mongoose');

mongoose.set("strictQuery", true);


const DB = "mongodb://127.0.0.1:27017/shopifyUserDB";

// const DB = "mongodb+srv://Rushi9080:Test123@cluster0.dnrwsii.mongodb.net/shopifyUserDB?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,

    
    }).then(()=>{
        console.log('connection successful!')
    }).catch((err)=>{
console.log("connection failed!!");
        console.log(err);
    });